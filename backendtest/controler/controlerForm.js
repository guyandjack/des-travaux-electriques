/*************   Ensemble des controleurs qui gèrent les commentaires utilisateur.       ***************/

//Le controler "testform" gerent les données issu du formulaire, et enregistre le commentaire dans la bdd.
//Le controler "getAllCommentsForOnePage" permet à chaque page de récuperer les commentaires utilisateurs correspondant.

/************************************************************************************************ */

//Import des fonctions

//Contient les parametres de connexion de la bdd.
const connectToBdd = require("../utils/functions/connexionBdd.js");

//Contient les fonction de control des data du formulaire.
const checkForm = require("../utils/functions/checkDataForm.js");

exports.testForm = (req, res, next) => {

  //Controle si la requete utilisateur provient du site 'electravaux.com'
  if (req.hostname !== "http//:www.electravaux.com") {
    res.status(450).json({ "message: ": "vient d' un autre site" });
  }

  //Controle anti-spam (pot de miel)
  if (req.body.sujet !== "") {
    res.status(404).json({ "message:": " Probalité d'un spam" });
  }

  //Controle la presence  des données issues des inputs du formulaire.

  //tableau renvoyé au front end si une input du formulaire est manquante
  let tabErrorBodyreq = [];

  //Tableau qui contient le resultat des test des inputs
  let tabValidInput = [];

  if (
    req.body.lastname === null ||
    req.body.lastname === "undefined" ||
    !req.body.lastname
  ) {
    tabErrorBodyreq.push({ lastname: " error" });
  }
  

  if (
    req.body.firstname === null ||
    req.body.firstname === "undefined" ||
    !req.body.firstname
  ) {
    tabErrorBodyreq.push({ firstname: " error" });
  }

  if (
    req.body.email === null ||
    req.body.email === "undefined" ||
    !req.body.email
  ) {
    tabErrorBodyreq.push({ email: " error" });
  }

  if (
    req.body.comment === null ||
    req.body.comment === "undefined" ||
    !req.body.comment
  ) {
    tabErrorBodyreq.push({ comment: " error" });
  }

  if (
    req.body.pageref === null ||
    req.body.pageref === "undefined" ||
    !req.body.pageref
  ) {
    tabErrorBodyreq.push({ pageref: " error" });
  }

  if (req.body.isresponse !== 1 && req.body.isresponse !== 0) {
    tabErrorBodyreq.push({ isresponse: " error" });
  }

  if (
    req.body.originalcommentid === null ||
    req.body.originalcommentid === "undefined" ||
    !req.body.originalcommentid
  ) {
    tabErrorBodyreq.push({ originalcommentid: " error" });
  }

  if (
    req.body.userdata === null ||
    req.body.userdata === "undefined" ||
    !req.body.userdata
  ) {
    tabErrorBodyreq.push({ userdata: " error" });
  }

  if (
    req.body.userurl === null ||
    req.body.userurl === "undefined" ||
    !req.body.userurl
  ) {
    tabErrorBodyreq.push({ userurl: " error" });
  }

  //si le tableau n' est pas vide, on renvoi le tableau d' erreur
  if (tabErrorBodyreq.length !== 0) {
    res.status(500).json(tabErrorBodyreq);
  }

  /****** donnée utilisateur *******/

  let lastName = req.body.lastname;

  let firstName = req.body.firstname;

  let email = req.body.email;

  let comment = req.body.comment;

  /** donees "cachees" **/

  let userUrl = req.body.userurl;

  // adresse ip de l' utilisateur
  let adressIp = checkForm.getuserip(req);

  // reference de la page dont est issu le formulaire
  let refPage = req.body.pageref;

  // indique si le commentaire est une réponse
  let isResponse = req.body.isresponse;

  // indique l id du commentaire correspondant a la reponse
  let originalCommentId = req.body.originalcommentid;

  //indique si  l' utilisateur souhaite ouvrir une session
  let userData = req.body.userdata;

  //Variables globales
  let insertID;

  //Controle la validite des données
  let testLastname = checkForm.validlastname(lastName);
  if (!testLastname) {
    tabValidInput.push({ lastname: "erreur de test" })
  }

  let testFirstname = checkForm.validfirstname(firstName);
  if (!testFirstname) {
    tabValidInput.push({ firstname: "erreur de test" })
  }

  let testMail = checkForm.validmail(email);
  if (!testMail) {
    tabValidInput.push({ email: "erreur de test" })
  }

  let testMessage = checkForm.validmessage(comment);
  if (!testMessage) {
    tabValidInput.push({ message: "erreur de test" })
  }

  let testRefPage = checkForm.validreferencepage(refPage);
  if (!testRefPage) {
    tabValidInput.push({ refpage: "erreur de test" })
  }

  let testResponse = checkForm.validisresponse(isResponse);
  if (!testResponse) {
    tabValidInput.push({ response: "erreur de test" })
  }

  let testCommentId = checkForm.validoriginalcommentid(originalCommentId);
  if (!testCommentId) {
    tabValidInput.push({ originalcommentid: "erreur de test" })
  }

  let testCheckbox = checkForm.validcheckbox(userData);
  if (!testCheckbox) {
    tabValidInput.push({ checkbox: "erreur de test" })
  }

  //si le tableau n' est pas vide, on renvoi le tableau d' erreur
  if (tabValidInput.length !== 0) {
    
    res.status(500).json(tabValidInput);
  }

  //Enregistrement du commentaire dans la base sql

  const connection = connectToBdd.connexionToBddTest();

  //Composition des requetes preparees

  //-1- requete pour inserer un commentaire original:

  //Requete -1- type "insert"
  let requeteInsertion = `INSERT INTO user_comment_test (lastname,firstname,email,content,adressip,pageref,response,originalcommentid,date) VALUES (?,?,?,?,?,?,?,?,NOW())`;

  //parametres de la requete -1- type "insert"
  let paramInsertion = [
    lastName,
    firstName,
    email,
    comment,
    adressIp,
    refPage,
    isResponse,
    originalCommentId,
  ];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
      return console.error("error de connection: " + err.message);
    }

    console.log("Connexion à la bdd ´travaux_electriques´ reussie!");

    //requette -1- insertion du commentaire
    connection.query(requeteInsertion, paramInsertion, (err, result) => {
      //gestion des erreurs
      if (err) {
        console.log("impossible d'enregistre le commentaire: " + err);

        res.status(500).json({
          message: "impossible d'enregistre le commentaire: " + err,
        });
        //fermeture connection
        connection.end();
      }

      //gestion du resultat
      console.log(
        "resultat de l'enregistrement du comment ds la bdd: " +
        JSON.stringify(result)
      );
      insertID = result.insertId;
      console.log("insertid dans la  requette 1 : " + insertID);

      // Requette secondaire facultative: Attribut une valeur à originalcommentid
      if (isResponse == 0) {
        console.log("requette 2 lancee");
        //Un commentaire original doit avoir son originalcommentid egal à son id

        //Requete type "update"
        let requeteUpdate = `UPDATE comment_user_test SET originalcommentid = ? WHERE id = ?`;

        //Parametre de la requette -2- type "update"
        let paramUpdate = [insertID, insertID];

        console.log("valeur du insertid dans la requette 2: " + insertID);

        connection.query(requeteUpdate, paramUpdate, (err, result) => {
          //gestion des erreurs
          if (err) {
            console.log("impossible de modifier le commentaire: " + err);

            res.status(500).json({
              message: "impossible de modifier le commentaire: " + err,
            });
            //fermeture connection
            connection.end();
          }

          //gestion du resultat
          console.log(
            "resultat de la mise  à jour du comment ds la bdd: " +
            JSON.stringify(result)
          );
        });
      }

      let resultForClient = checkForm.objectresponse(
        //variable pour premplir les champs du formulaire
        lastName,
        firstName,
        email,
        //Variable qui permet de tester si l'utilisateur souhaite être reconnu
        userData
        //Variablecontenant l'ip de l'utilisateur qui
      );

      res.status(201).json(resultForClient);

      connection.end();
    });
  });
  
};


//Middelware qui recupere tous les commentaires correspondant à la page consultée.

exports.getAllCommentsForOnePage = (req, res, next) => {

  //Recuperation de la reference de la page consultée.
  let param = req.params.ref;
  
  //recuperation des commentaires dans la base sql

  // definition des parametre de connexion
  const connection = connectToBdd.connexionToBddTest();

  /************** requetes preparées************* */

  //Requete type "select All comments"
  let requeteSelectAllCommentsFromPage = `SELECT id, firstname, content, date, originalcommentid, response FROM user_comment_test WHERE pageref = ?`;

  //parametres de la requete "select page comments"
  let paramSelectAllCommentsFromPage = [param];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
      res.status(400).json({ "message: ": "probleme identifiant connexion" });
      return console.error("error de connection: " + err.message);
    }
    let date = new Date();
    console.log("Connecté à la bdd 'travaux_electriques' à :  " + date);
    connection.query(
      requeteSelectAllCommentsFromPage,
      paramSelectAllCommentsFromPage,

      (err, result) => {
        //gestion des erreurs
        if (err) {
          res.status(500).json({
            message:
              "impossible de recuperer les commentaires pour cette page: " +
              err,
          });

          //fermeture connection
          connection.end();
        }

        //gestion du resultat

        //renvoyer au client un objet json  "result"

        res.status(200).json(result);

        connection.end();
      }
    );
  });
};
