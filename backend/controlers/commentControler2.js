/**************  ensemble des midelwares qui gérent la logique des commentaires**********************/

//import du model mysql
const mysql = require("mysql");

//Midellwares qui controle et enregistre les données issues du formulaire

exports.checkDataForm = (req, res, next) => {
  //recuperation des données issu du formulaire
  /** donnees de l'utilisateur **/
  let lastName = req.body.lastname;
  let firstName = req.body.firstname;
  let email = req.body.email;
  let comment = req.body.comment;

  /** donees "cachees" **/
  let adressIp = getUserIP(req) // adresse ip de l' utilisateur
  let refPage = req.body.pageref; // reference de la page dont est issu le formulaire
  let isResponse = req.body.isresponse; // indique si le commentaire est une reponse
  let originalCommentId = req.body.originalcommentid; // indique l id du commentaire correspondant a la reponse
  let userData = req.body.userdata;

  //expressions regulieres

  //Motif qui autorise lettres majuscules, minuscules, undescore, apostrophe,point, et trait d'union.entre 2 et 20 carracteres.
  let masqueText = /^[A-Za-z_'.-]{2,30}$/;

  //Motif qui autorise un nombre ou un chiffre
  let masqueNumber = /^[0-9]{1,3}$/;

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

  //motif qui autorise "o" suivi de "k"
  let masqueCheckBox = /^[o][k]$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, espace et underscore, retour a la ligne de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!ç\n\s ]{10,200}$/;

  /*************** fonctions qui recupere l' id du client *********** */
  
  
  function getUserIP(req) {
    var ip =
        req.ip ||
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    ip = ip.split(',')[0];
    //ip = ip.split(':').slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
    return ip;
}
  

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

  //Valide un entier qui indique si le commentaire est une réponse à un autre commentaire
  function validBoolean() {
    if (isResponse == null || isResponse == "undefined" || !isResponse) {
      return false;
    }

    if (masqueNumber.test(isResponse) !== true) {
      return false;
    } else {
      return true;
    }
  }

  //Valide l' id du commentaire original
  function validOriginalCommentId() {
    if (
      originalCommentId == null ||
      originalCommentId == "undefined" ||
      !originalCommentId
    ) {
      originalCommentId = -10; //valeur arbitraire pour indiquer que le commentaire est un commentaire original
      return true;
    }

    if (masqueNumber.test(originalCommentId) !== true) {
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
    //Enregistrement du commentaire dans la base sql

    //Option de connexion à la bdd sql "travaux_electriques"
    let connection = mysql.createConnection({
      host: "localhost",
      user: "admin",
      password: "Poweradmin65!",
      database: "travaux_electriques",
    });

    //Requete type "insert"
    let requeteInsertion = `INSERT INTO comment_user (lastname,firstname,email,content,adressip,pageref,response,originalcommentid,date) VALUES (?,?,?,?,?,?,?,?,NOW())`;

    //parametres de la requete "insert"
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

  //Requete type "select All comments"
  let requeteSelectAllCommentsFromPage = `SELECT id, firstname, content, date, originalcommentid, response FROM comment_user WHERE pageref = ?`;
  
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

        //gestion des erreurs
        if (err) {
          
          res.status(500).json({
            message:
              "impossible de recuperer les commentaires originaux pour cette page: " +
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
