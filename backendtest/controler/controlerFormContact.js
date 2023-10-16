/*************   *****************************************************       ***************/

//Le controler "testFormContact" :

/** gerent les données issu du formulaire de la page contact, 
/** enregistre les informations issu du formulaire dans la bdd,


/************************************************************************************************ */


//Import des fonctions

//Import du module "nodemailer"
let nodemailer = require("nodemailer");

//Contient les parametres de connexion de la bdd.
const connectToBdd = require("../utils/functions/connexionBdd.js");

//Contient les fonction de control des data du formulaire.
const checkForm = require("../utils/functions/checkDataForm.js");

exports.testFormContact = (req, res, next) => {
  
  //Tableau qui contient le resultat des tests des inputs
  let tabValidInput = [];

  //Clefs du corp de requete normalement attendues
  let tabRefOfKeys = [
    "lastname",
    "firstname",
    "email",
    "message",
    "pageref",
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

  let message = req.body.message;

  
  // adresse ip de l' utilisateur
  //let adressIp = checkForm.getuserip(req);

  // reference de la page dont est issu le formulaire
  let refPage = req.body.pageref;

  

  //Controle la validite des données
  checkForm.validlastname(lastName, tabValidInput);

  checkForm.validfirstname(firstName, tabValidInput);

  checkForm.validmail(email, tabValidInput);

  checkForm.validmessage(message, tabValidInput);

  checkForm.validreferencepage(refPage, tabValidInput);

  //si le tableau n' est pas vide, on renvoi le tableau d' erreur
  if (tabValidInput.length !== 0) {
    res.status(200).json({ "me": " 01D" });
  }

  //Enregistrement du commentaire dans la base sql

  const connection = connectToBdd.connexionToBddTest();

  //Composition des requetes preparees

  //-1- requete pour inserer un commentaire original:

  //Requete -1- type "insert"
  let requeteInsertion = `INSERT INTO user_message_test (lastname,firstname,email,message,date) VALUES (?,?,?,?,NOW())`;

  //parametres de la requete -1- type "insert"
  let paramInsertion = [
    lastName,
    firstName,
    email,
    message,
    
    ];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
      return console.error("error de connection: " + err.message);
    }

    console.log("Connexion à la bdd ´travaux_electriques´ reussie!");

    //requette -1- insertion du message
    connection.query(requeteInsertion, paramInsertion, (err, result) => {
      //gestion des erreurs
      if (err) {
        console.log("impossible d'enregistre le message: " + err);

        res.status(500).json({
          message: "impossible d'enregistre le message: " + err,
        });
        //fermeture connection
        connection.end();
      }
      //si la requette d' insertion reussi on passe au midelware suivant
        connection.end();
       next();
    });
  });
    
   
};


/**************************************** 
 * Middelware qui envoi un mail au webmaster
**************************************/


exports.sendMail = (req, res, next) => {

let transporter = nodemailer.createTransport({
  service: "orange",
  auth: {
    user: "g-dupanloup@wanadoo.fr",
    pass: "9bce6hq9BCE6HQ",
  },
});

let mailOptions = {
  from: req.body.email,
  to: "myfriend@yahoo.com",
  subject: "Sending Email using Node.js",
  text: req.body.message,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
      res.status(201).json({ "message status": "sended" });
      
  }
});
    
}