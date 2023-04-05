/**************  ensemble des midelwares qui gérent la logique des commentaires**********************/

//import du model mysql
const mysql = require("mysql");

//Midellwares qui controle et enregistre les données issues du formulaire

exports.checkDataForm = (req, res, next) => {
  //recuperation des données issu du formulaire
  let lastName = req.body.lastname;
  let firstName = req.body.firstname;
  let email = req.body.email;
  let comment = req.body.comment;
  let adressIp = req.ip;
  let userUrl = req.body.userurl;
  let refPage = req.body.pageref;
  let isResponse = req.body.isresponse;
  let OriginalCommentId = req.body.originalcommentid;
  let userData = req.body.userdata;
  let dateofComment = "NOW()";

  //Motif qui autorise lettres majuscules, minuscules, undescore, apostrophe,point, et trait d'union.entre 2 et 20 carracteres.
  let masqueText = /^[A-Za-z_'.-]{2,30}$/;

  //Motif qui autorise lettres majuscules / minuscules / nombres entre 2 et 20 carracteres.
  let masqueAlphaNumerique = /^[0-9A-Za-z_'.-]{2,30}$/;

  //Motif qui autorise une adresse mail qui peut commencer par:
  //0 ou 4 chiffres
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
  //suivi d' un arobase
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
  //suivi d' un point
  //suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
  let masqueMail = /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,20}\.[0-9a-zA-Z_'.-]{2,15}$/;

  let masqueCheckBox = /^[o][k]$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, espace et underscore, retour a la ligne de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!\n\s ]{10,200}$/;

  /*************** fonctions de controle et de validation des inputs utilisateur *********** */

  //Valide l' input "lastName"
  function validLastName() {
    if (
      masqueText.test(lastName) !== true ||
      lastName === null ||
      lastName === "undefined"
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Valide l' input "firstName"
  function validFirstName() {
    if (
      masqueText.test(firstName) !== true ||
      firstName === null ||
      firstName === "undefined"
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Valide l' input "mail"
  function validMail() {
    if (
      masqueMail.test(email) !== true ||
      email === null ||
      email === "undefined"
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Valide le message utilisateur
  function validMessage() {
    if (
      masqueMessage.test(comment) !== true ||
      comment === null ||
      comment === "undefined"
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Valide la réference de la page
  function validReferencePage() {
    if (
      masqueAlphaNumerique.test(refPage) !== true ||
      refPage === null ||
      refPage === "undefined"
    ) {
      return false;
    } else {
      return true;
    }
  }

  //Valide le boolean qui indique si le commentaire est une réponse à un autre commentaire
  function validBoolean() {
    if (isResponse == null || isResponse == "undefined") {
      isResponse = 1;
      return true;
    }
    if (isResponse !== true) {
      isResponse = 0;
      return true;
    } else {
      isResponse = 1;
      return true;
    }
  }

  //Valide l' id du commentaire original
  function validOriginalCommentId() {
    console.log("valeur originalCommentId: " + OriginalCommentId);

    if (OriginalCommentId < 1) {
      return true;
    }

    if (masqueAlphaNumerique.test(OriginalCommentId) !== true) {
      return false;
    } else {
      return true;
    }
  }

  //valide l' autorisation d' enregistrer une session
  function validCheckbox() {
    //si le checkbox n'est pas coché le formulaire ne renvoi rien, on force le retour à true pour la suite du script

    if (userData == null || userData == "undefined") {
      return true;
    }

    if (masqueCheckBox.test(userData) !== true) {
      return false;
    } else {
      return true;
    }
  }

  //formate la date en une chaine de carractere personalisée
  function setFormatedDate() {
    let formatDate = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
    let date = new Date();
    console.log(formatDate.format(date));
    let dateStringOriginal = formatDate.format(date);
    let dateStringSplited = dateStringOriginal.split(",");
    console.log(dateStringSplited);
    dateStringSplited.splice(1, 0, ", à ");
    dateStringSplited.splice(0, 0, "Le ");

    console.log(dateStringSplited);
    let dateStringFormated = dateStringSplited.join("");
    return dateStringFormated;
  }

  //Lance les procedures de test de chaque input utilisateur
  let testLastname = validLastName();
  let testFirstname = validFirstName();
  let testMail = validMail();
  let testMessage = validMessage();
  let testRefPage = validReferencePage();
  let testBoolean = validBoolean();
  let testCommentId = validOriginalCommentId();
  let testCheckbox = validCheckbox();

  //si les données sont valides on crée une date et recuperation de l IP client,  enregistrement dans la base de données le contenu du formulaire

  console.log("etat de testLastname : " + testLastname);
  console.log("etat de testFirstname : " + testFirstname);
  console.log("etat de testMail : " + testMail);
  console.log("etat de testMessage : " + testMessage);
  console.log("etat de testrefPage : " + testRefPage);
  console.log("etat de testBoolean : " + testBoolean);
  console.log("etat de testCommentId : " + testCommentId);
  console.log("etat de testcheckbox : " + testCheckbox);
  console.log(typeof testBoolean);

  if (
    testLastname &&
    testFirstname &&
    testMail &&
    testMessage &&
    testRefPage &&
    testBoolean &&
    testCommentId &&
    testCheckbox
  ) {
    //Formatage de la date
    req.body.date = setFormatedDate();

    //Enregistrement du commentaire dans la base sql

    //Option de connexion à la bdd sql "travaux_electriques"
    let connection = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "Poweradmin65!",
      database: "travaux_electriques",
    });

    //Requete type "insert"
    let requeteInsertion = `INSERT INTO comment_user (lastname,firstname,email,content,adress_ip,page_ref,response,original_comment_id,date) VALUES (?,?,?,?,?,?,?,?,?)`;

    //parametres de la requete "insert"
    let paramInsertion = [
      lastName,
      firstName,
      email,
      comment,
      adressIp,
      refPage,
      isResponse,
      OriginalCommentId,
      dateofComment,
    ];

    //Connection à la bdd sql "travaux_electriques"
    connection.connect(function (err) {
      if (err) {
        return console.error("error de connection: " + err.message);
      }

      console.log("connecte a la bdd");
      connection.query(requeteInsertion, paramInsertion, (err, result) => {
        if (err) {
          console.log("impossible d' enregistre le commentaire: " + err);

          res.status(500).json({
            message: "impossible d' enregistre le commentaire: " + err,
          });
          //fermeture connection
          connection.end();
        }

        res.status(201).json({ message: "commentaire enregistré!" });
        connection.end();
      });
    });
  }
};

//Middelware qui recupere tous les commentaires correspondant à la page consultée.

exports.getAllCommentsForOnePage = (req, res, next) => {
  //récuperation de la référence de la page consulté.
    let param = req.params.ref;
  
  //recuperation des commentaires dans la base sql

  //Option de connexion à la bdd sql "travaux_electriques"
  let connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "Poweradmin65!",
    database: "travaux_electriques",
  });

  /************** requetes preparées************* */

  //Requete type "select page comments"
  let requeteSelectAllCommentsFromPage = `SELECT firstname, content, date, originalcommentid, response FROM comment_user WHERE pageref = ?`;

  //parametres de la requete "select page comments"
  let paramSelectAllCommentsFromPage = [param];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
      return console.error("error de connection: " + err.message);
    }

    console.log("Connecté à la bdd 'travaux_electriques'");
    connection.query(
      requeteSelectAllCommentsFromPage,
      paramSelectAllCommentsFromPage,

      (err, result) => {
        if (err) {
          console.log(
            "impossible de recupérer les commentaires pour cette page: " + err
          );

          res.status(500).json({
            message:
              "impossible de recuperer les commentaires originaux pour cette page: " +
              err,
          });

          //fermeture connection
          connection.end();
        }

        console.log(
          "resultat de la requette select: " + JSON.stringify(result)
        );
        res.status(201).json(JSON.stringify(result));
        connection.end();
      }
    );
  });
};
