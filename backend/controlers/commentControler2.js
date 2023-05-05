/**************  ensemble des midelwares qui gérent la logique des commentaires**********************/

//Import des fonctions de controle des inputs issues du formulaire
const checkForm = require("../utils/function/check_data_user/check_data_user.js");

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

  /** donees "cachees" **/
  let userUrl = req.body.userurl;
  console.log("valeur de userurl: " + userUrl);
  let adressIp = checkForm.getuserip(req);
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
    originalCommentId = -1
  }
  console.log("valeur de original commentId apres la fonction de test: " + originalCommentId)
  let testCheckbox = checkForm.validcheckbox(userData);

  //si les données sont valides enregistrement dans la base de données le contenu du formulaire

  console.log("etat de testLastname : " + testLastname);
  console.log("etat de testFirstname : " + testFirstname);
  console.log("etat de testMail : " + testMail);
  console.log("etat de testMessage : " + testMessage);
  console.log("etat de testrefPage : " + testRefPage);
  console.log("etat de testBoolean : " + testBoolean);
  console.log("etat de testCommentId : " + testCommentId.test);
  console.log("etat de testcheckbox : " + testCheckbox);

  if (
    testLastname &&
    testFirstname &&
    testMail &&
    testMessage &&
    testRefPage &&
    testBoolean &&
    testCommentId.test  &&
    testCheckbox
  ) {
    //Enregistrement du commentaire dans la base sql

    let connection = checkForm.createconnexionmysql();

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

        let resultForClient = checkForm.objectresponse(lastName, firstName, email, userData );

        res.status(201).json(resultForClient);

        connection.end();
      });
    });
  }
  else {
    console.log("une condition de testInputUser n'est pas valide")
  }
};

//Middelware qui recupere tous les commentaires correspondant à la page consultée.

exports.getAllCommentsForOnePage = (req, res, next) => {
  //récuperation de la référence de la page consulté.
  let param = req.params.ref;

  //recuperation des commentaires dans la base sql

  let connection = checkForm.createconnexionmysql();

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
