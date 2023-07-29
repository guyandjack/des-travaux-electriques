


//import des functions


const connectToBdd = require("../utils/functions/connexionBdd.js");

const checkForm = require("../utils/functions/checkDataForm.js");



exports.testForm = (req, res) => {
  //Controle la presence des données "obligatoires" issues des inputs du formulaire.
  //Si une valeur est absente on retourne un message d'erreur au client

  /*if(
      req.body.lastname === null || req.body.lastname === "undefined" || !req.body.lastname ||
      req.body.firstname === null || req.body.firstname === "undefined" || !req.body.firstname || 
      req.body.email === null || req.body.email === "undefined" || !req.body.email ||
      req.body.comment === null || req.body.comment === "undefined" || !req.body.comment ||
      req.body.pageref === null || req.body.pageref === "undefined" || !req.body.pageref ||
      req.body.isresponse === null || req.body.isresponse === "undefined" || !req.body.isresponse 
      //req.body.originalcommentid === null || req.body.originalcommentid === "undefined" || !req.body.originalcommentid ||
      //req.body.userdata === null || req.body.userdata === "undefined" || !req.body.userdata 
    )
  {
    res.status(500).json({ message: " Le formulaire a envoyé des valeurs inatendues..."  })
  }*/

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

  //Procedure de test
  let testLastname = checkForm.validlastname(lastName);
  let testFirstname = checkForm.validfirstname(firstName);
  let testMail = checkForm.validmail(email);
  let testMessage = checkForm.validmessage(comment);
  let testRefPage = checkForm.validreferencepage(refPage);
  let testBoolean = checkForm.validisresponse(isResponse);

  //TescommentId renvoi la valeur du test et la valeur du commentoriginalid dans certains cas
  let testCommentId = checkForm.validoriginalcommentid(originalCommentId);

  if (testCommentId.test == true && testCommentId.neworiginalid == -1) {
    originalCommentId = -1;
  }
  console.log(
    "valeur de original commentId apres la fonction de test: " +
      originalCommentId
  );

  let testCheckbox = checkForm.validcheckbox(userData);

  //si les données sont valides on les enregistre dans la base de données
  if (
    testLastname &&
    testFirstname &&
    testMail &&
    testMessage &&
    testRefPage &&
    testBoolean &&
    testCommentId.test &&
    testCheckbox
  ) {
    //Enregistrement du commentaire dans la base sql

    const connection = connectToBdd.connexionToBdd;

    //Composition des requetes preparees

    //-1- requete pour inserer un commentaire original:

    //Requete -1- type "insert"
    let requeteInsertion = `INSERT INTO user_comment (lastname,firstname,email,content,adressip,pageref,response,originalcommentid,date) VALUES (?,?,?,?,?,?,?,?,NOW())`;

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
          let requeteUpdate = `UPDATE comment_user SET originalcommentid = ? WHERE id = ?`;

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
          lastName,
          firstName,
          email,
          userData
        );

        res.status(201).json(resultForClient);

        connection.end();
      });
    });
  } else {
    res.status(500).json({
      message: "des donnees sont manquqntes!!!",
    });
  }
};

//Middelware qui recupere tous les commentaires correspondant à la page consultée.

exports.getAllCommentsForOnePage = (req, res, next) => {
  //récuperation de la référence de la page consulté.
  let param = req.params.ref;

  //recuperation des commentaires dans la base sql

  const connection = connectToBdd.connexionToBdd();// definition des parametre de connexion

  /************** requetes preparées************* */

  //Requete type "select All comments"
  let requeteSelectAllCommentsFromPage = `SELECT id, firstname, content, date, originalcommentid, response FROM comment_user WHERE pageref = ?`;

  //parametres de la requete "select page comments"
  let paramSelectAllCommentsFromPage = [param];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
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

        res.status(200).json(JSON.stringify(result));

        connection.end();
      }
    );
  });
};