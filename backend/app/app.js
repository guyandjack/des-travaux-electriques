//utilisation du module express
const express = require("express");

const bodyParser = require("body-parser");

const modelComment = require("../models/userModel.js");

//déclaration de notre application avec la methode express
const app = express();

//permet d'accerder au contenu du corps de la requette
app.use(bodyParser.urlencoded({ extended: true }));

//Connexion à la base de donnee mongo
const connectDB = require("../services/mongoDB/connexionDataBase.js");
connectDB.connectToMongo();

//midelware (security cors) qui permet les requettes entre des serveurs différents.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Midellwares qui controle les données issues du formulaire
app.post("/api/form-check/", (req, res, next) => {
  //recuperation des données issu du formulaire
  let lastName = req.body.lastname;
  let firstName = req.body.firstname;
  let email = req.body.email;
    let comment = req.body.comment;
    let userUrl = req.body.userurl;
    
    console.log("contenu du message: " + comment)
    console.log("url de la requette: " + userUrl)

  //Motif qui autorise lettres majuscules, minuscules, undescore, apostrophe,point, et trait d' union.entre 2 et 20 carracteres
  let masqueText = /^[A-Za-z_'.-]{2,20}$/;

  //Motif qui autorise une adresse mail qui peut commencer par:
  //0 ou 4 chiffres
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
  //suivi d' un arobase
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
  //suivi d' un point
  //suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
  let masqueMail =
    /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,15}\.[0-9a-zA-Z_'.-]{2,15}$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, espace et underscore de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!\n\s ]{10,200}$/;

  //Valide l' input "lastName"
    function validLastName() {
      
    if (masqueText.test(lastName) !== true || lastName.length < 2 || lastName === null || lastName === "undefined") {
      return false;
    } else {
      return true;
    }
  }

  //Valide l' input "firstName"
  function validFirstName() {
    if (
      masqueText.test(firstName) !== true ||
      firstName.length < 2 ||
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
      email.length < 5 ||
      email.length > 50 ||
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
        !lastName ||
        masqueMessage.test(comment) !== true ||
        comment.length < 10 ||
        comment.length > 200 ||
        comment === null ||
        comment === "undefined"
      ) {
        return false;
      } else {
        return true;
      }
  }

  let testLastname = validLastName();
  let testFirstname = validFirstName();
  let testMail = validMail();
    let testMessage = validMessage();
    
    console.log(testMessage)

  //si les données sont valides on les enregistre dans la base de données.

  if (testLastname && testFirstname && testMail && testMessage) {
      let formatDate = new Intl.DateTimeFormat(
          "fr-FR",
          {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
              hour12: false,
              at:" à ",
              hour: "2-digit",
              minute: "2-digit",
              
          });
      let date = new Date();
      req.body.date = formatDate.format(date);
    req.body.adressIp = req.ip;
    const comment = new modelComment({
        ...req.body
        
    });
      
      console.log(comment);

    comment
      .save()
      .then(() => {
        res
          .status(201)
          .redirect(userUrl + "#form/?comment=true")
          
      })
      .catch((error) => {
        res.status(500).json({ message : "message d'erreur: " + error });
      });
  } else {
    res.status(500).json({ message: "Donnees du formulaire erronées" });
  }
});

app.get("/api/comment/", (req, res, next) => {

    modelComment.find()
        .then((allcomments) => {
            res.status(200).json(allcomments)
            console.log(allcomments)
        })
        .catch((error) => {
        res.status(500).json({message: "imposssible de trouver les commentaires" + error})
    })
})

module.exports = app;
