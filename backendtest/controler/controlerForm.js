/*************   Ensemble des controleurs qui gèrent les commentaires utilisateur.       ***************/

//Le controler "testform" gerent les données issu du formulaire, et enregistre le commentaire dans la bdd.

/************************************************************************************************ */

//Import des fonctions

//Contient les parametres de connexion de la bdd.
const connectToBdd = require("../utils/functions/connexionBdd.js");

//Contient les fonction de control des data du formulaire.
const checkForm = require("../utils/functions/checkDataForm.js");

exports.testForm = (req, res, next) => {
  //tableau renvoyé au front end si une input du formulaire est manquante
  let tabErrorBodyreq = [];

  //Tableau qui contient le resultat des tests des inputs
  let tabValidInput = [];

  //Clefs du corp de requete normalement attendues
  let tabRefOfKeys = [
    "lastname",
    "firstname",
    "email",
    "comment",
    "pageref",
    "isresponse",
    "originalcommentid",
    "userdata",
    "userurl",
    "sujet",
  ];

  /****** check 1:  *********/
  //Controle si la requete utilisateur provient du site 'electravaux.com'

  /*if (req.headers.origin !== "http://localhost:3000") {
    //Si la condition est rempli on renvoi un code de status reussi et un message vide, pour leurer le robot
    res.status(201).json({ "em ": "01A" });
  }*/



  /****** check 2:  *********/
  // controle si le corps de la requete contient toutes les proprietés attendues

  //Récuperation des clefs du corps de la requete
  let listOfKeys = Object.keys(req.body);
  //Si le tableau des clefs vide on renvoi un message d'erreur
  if (listOfKeys.length < 1) {
    res.status(200).json({ "me": " 01B" });
  }

  let isAllKeys = checkForm.checkreqbodykeys(listOfKeys, tabRefOfKeys);
  //Si toutes les clefs attendues ne sont pas presente on renvoi un message d' erreur
  if (isAllKeys !== true) {
    res.status(200).json({"me": " 02B"})
  }


  /****** check 3:  *********/
  //Controle anti-spam (pot de miel)
  //La variable sujet est issu d' une input caché que l'utilisateur ne peut pas voir et remplir.(leure pour robot)
  
  if (req.body.sujet.length > 0) {
      //Si la valeur de la clef sujet n' est pas nulle, on renvoi un code d' erreur
      res.status(201).json({ "me": " 01C" });
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
  checkForm.validlastname(lastName, tabValidInput);

  checkForm.validfirstname(firstName, tabValidInput);

  checkForm.validmail(email, tabValidInput);

  checkForm.validmessage(comment, tabValidInput);

  checkForm.validreferencepage(refPage, tabValidInput);

  checkForm.validisresponse(isResponse, tabValidInput);

  checkForm.validoriginalcommentid(originalCommentId, tabValidInput);

  checkForm.validcheckbox(userData, tabValidInput);

  //si le tableau n' est pas vide, on renvoi le tableau d' erreur
  if (tabValidInput.length !== 0) {
    res.status(200).json({ "me": " 01D" });
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
