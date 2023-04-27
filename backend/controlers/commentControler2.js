/**************  ensemble des midelwares qui gérent la logique des commentaires**********************/

//import des librairies
const mysql = require("mysql");

//Midellwares qui controle et enregistre les données issues du formulaire

exports.checkDataForm = (req, res, next) => {
  //recuperation des données issu du formulaire

  /** donnees de l'utilisateur **/
  let lastName = req.body.lastname;
  console.log("valeur de lastname: " + lastName);
  let firstName = req.body.firstname;
  console.log("valeur de firstname: " + firstName);
  let email = req.body.email;
  console.log("valeur de email: " + email);
  let comment = req.body.comment;
  console.log("valeur de comment: " + comment);
  let userUrl = req.body.userurl;
  console.log("valeur de userurl: " + userUrl);

  /** donees "cachees" **/
  let adressIp = getUserIP(req);
  console.log("valeur de adresse ip: " + adressIp); // adresse ip de l' utilisateur
  let refPage = req.body.pageref;
  console.log("valeur de refpage: " + refPage); // reference de la page dont est issu le formulaire
  let isResponse = req.body.isresponse;
  console.log("valeur de isresponse: " + isResponse); // indique si le commentaire est une reponse
  console.log("type de isresponse: " + typeof isResponse); // indique si le commentaire est une reponse
  let originalCommentId = req.body.originalcommentid;
  console.log("valeur de originalcommentid: " + originalCommentId); // indique l id du commentaire correspondant a la reponse
  let userData = req.body.userdata;
  console.log("valeur de userdata: " + userData); //indique si  l' utilisateur souhaite ouvrir une session


  //Variables globales
  let insertID;
  let flag = false;
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
  function getUrlUser(requestObject) {
    let urlUser = Url.parse(requestObject.url, true).pathname;
    return urlUser;
  }

  function getUserIP(req) {
    var ip =
      req.ip ||
      req.headers["x-forwarded-for"] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
    ip = ip.split(",")[0];
    //ip = ip.split(':').slice(-1); //in case the ip returned in a format: "::ffff:146.xxx.xxx.xxx"
    return ip;
  }

  //creation d' un objet à renvoyer au front end suite à l' enregistrement d' un commentaire
  function objectResponse() {
    let object = {};

    if (userData == "ok") {
      object = {
        validsession: "ok",
        userDataName: lastName,
        userDataFirstname: firstName,
        userDataEmail: email,
      };
    } else {
      object = {
        validsession: "no",
      };
    }
    return object;
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
    if (isResponse === 1 || isResponse === 0) {
      return true;
    } else {
      return false;
    }
  }

  //Valide l' id du commentaire original
  function validOriginalCommentId() {
    if (
      originalCommentId == null ||
      originalCommentId == "undefined" ||
      !originalCommentId
    ) {
      originalCommentId = -1;
      return true;
    }

    if (masqueNumber.test(originalCommentId) !== true) {
      return false;
    } else {
      return true;
    }
  }

  //valide l' autorisation d' enregistrer une session utilisateur
  function validCheckbox() {
    //La valeur du checkbox peut etre nulle, ou absente.

    if (userData == null || userData == "undefined") {
      return true;
    }

    if (masqueCheckBox.test(userData) !== true) {
      return false;
    } else {
      return true;
    }
  }

  //Lance les procedures de test de chaque input utilisateur et input cachée
  let testLastname = validLastName();
  let testFirstname = validFirstName();
  let testMail = validMail();
  let testMessage = validMessage();
  let testRefPage = validReferencePage();
  let testBoolean = validBoolean();
  let testCommentId = validOriginalCommentId();
  let testCheckbox = validCheckbox();

  //si les données sont valides enregistrement dans la base de données le contenu du formulaire

  console.log("etat de testLastname : " + testLastname);
  console.log("etat de testFirstname : " + testFirstname);
  console.log("etat de testMail : " + testMail);
  console.log("etat de testMessage : " + testMessage);
  console.log("etat de testrefPage : " + testRefPage);
  console.log("etat de testBoolean : " + testBoolean);
  console.log("etat de testCommentId : " + testCommentId);
  console.log("etat de testcheckbox : " + testCheckbox);

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

    //Composition des requetes preparees

    //-1- requete pour inserer un commentaire original:

    //Requete -1- type "insert"
    let requeteInsertion = `INSERT INTO comment_user (lastname,firstname,email,content,adressip,pageref,response,originalcommentid,date) VALUES (?,?,?,?,?,?,?,?,NOW())`;

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

        let resultForClient = objectResponse();

        res.status(201).json(resultForClient);

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
