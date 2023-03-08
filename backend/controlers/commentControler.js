/**************  ensemble de midelwares qui gérent la logique des commentaires**********************/

//import du model mongoDB pour les commentaires
const modelComment = require("../models/userComment.js");


//Midellwares qui controle les données issues du formulaire

exports.checkDataForm =  (req, res, next) => {
    //recuperation des données issu du formulaire
    let lastName = req.body.lastname;
    let firstName = req.body.firstname;
    let email = req.body.email;
    let comment = req.body.comment;
    let userUrl = req.body.userurl;
    let refForm = req.body.refform;
    let isResponse = req.body.isresponse;

    

    //Motif qui autorise lettres majuscules, minuscules, undescore, apostrophe,point, et trait d'union.entre 2 et 20 carracteres.
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
      if (
        masqueText.test(lastName) !== true ||
        lastName.length < 2 ||
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
        !comment ||
        masqueMessage.test(comment) !== true ||
        comment === null ||
        comment === "undefined"
      ) {
        return false;
      } else {
        return true;
      }
    }

    //Valide la réference du formulaire
    function validReferenceFormulaire() {
      if (
        masqueText.test(refForm) !== true ||
        refForm === null ||
        refForm === "undefined"
      ) {
        return false;
      } else {
        return true;
      }
    }

    //Valide le boolean qui indique si le commentaire est une réponse à un autre commentaire
    function validBoolean() {
      if (!isResponse) {
        return false
      } else {
        return true
      }
    }


    let testLastname = validLastName();
    let testFirstname = validFirstName();
    let testMail = validMail();
    let testMessage = validMessage();
    let testRefForm = validReferenceFormulaire();
    let testBoolean = validBoolean();

    //si les données sont valides on crée une date et recuperation de l IP client,  enregistrement dans la base de données le contenu du formulaire

    console.log("etat de testLastname : " + testLastname);
    console.log("etat de testFirstname : " + testFirstname);
    console.log("etat de testMail : " + testMail);
    console.log("etat de testMessage : " + testMessage);
    console.log("etat de testrefForm : " + testRefForm);
    console.log("etat de testBoolean : " + testBoolean);
    console.log(typeof testBoolean);

    if (
      testLastname &&
      testFirstname &&
      testMail &&
      testMessage &&
      testRefForm &&
      testBoolean
    ) {
      let formatDate = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour12: false,
        at: " à ",
        hour: "2-digit",
        minute: "2-digit",
      });
      let date = new Date();
      req.body.date = formatDate.format(date);
      req.body.adressIp = req.ip;
      const comment = new modelComment({
        ...req.body,
      });

      comment
        .save()
        .then(() => {
          res.status(201).redirect(userUrl + "/?comment=saved");
        })
        .catch((error) => {
          res.status(500).redirect(userUrl + "/?comment=unsaved").json({ message: "message d'erreur: " + error });
        });
    } else {
      res.status(500).json({ message: "Donnees du formulaire erronées" });
    }
  };


exports.getAllCommentsForOnePage = (req, res, next) => {
      console.log(req.params);
    modelComment
        .find({ formref: req.params.ref })
        .then((allcomments) => {
            res.status(200).json(allcomments);
        })
        .catch((error) => {
            res.status(500).json({
                message: "imposssible de trouver les commentaires " + error,
            });
        });
};