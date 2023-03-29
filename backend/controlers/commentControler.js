/**************  ensemble des midelwares qui gérent la logique des commentaires**********************/

//import du model mongoDB pour les commentaires
const { model } = require("mongoose");
const modelComment = require("../models/userComment.js");

//Midellwares qui controle les données issues du formulaire

exports.checkDataForm = (req, res, next) => {
  //recuperation des données issu du formulaire
  let lastName = req.body.lastname;
  let firstName = req.body.firstname;
  let email = req.body.email;
  let comment = req.body.comment;
  let userUrl = req.body.userurl;
  let refPage = req.body.pageref;
  let isResponse = req.body.isresponse;
  let OriginalCommentId = req.body.originalcommentid;
  let userData = req.body.userdata;

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
    if (!isResponse) {
      return false;
    } else {
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

    //recuperation de l' adresse ip de l' utilisateur
    req.body.adressIp = req.ip;
    const comment = new modelComment({
      ...req.body,
    });

    

    //Enregistrement dans la base de données
    comment
      .save()
      .then(() => {
        res
          .status(201)
          .json({ message: "comment saved" })
          
      })
      .catch((error) => {
        res
          .status(500)
          .redirect(userUrl + "/?comment=unsaved")
          .json({ message: "commentaires non enregistrés" + error });
      });
  } else {
    res.status(500).json({ message: "Donnees du formulaire erronées" });
  }
};

//Middelware qui récupere et trie l' ensemble des commentaires pour la page consultée
exports.getAllCommentsForOnePage = (req, res, next) => {
  let arrayOfOriginalsComments = [];
  let arrayOfResponsesComments = [];
  let filteredArray = [];

  // filtre les commentaires originaux et reponses , retourne un tableau à afficher
  function filterArray(originalsComments, responsesComments) {
    console.log("arg1 de la function: " + originalsComments);
    console.log("arg2 de la function: " + responsesComments);

    let arrayOfmatch = [];
    //boucle qui itère sur le tableau des comments originals
    for (let iorigin = 0; iorigin < originalsComments.length; iorigin++) {
      //A chaque itération on recherche les commentaires réponses
      arrayOfmatch = responsesComments.filter(
        (commentresponse) =>
          commentresponse.originalcommentid == originalsComments[iorigin]._id
      );

      console.log(
        "tableau  des commentaires responses correspondant:  " + arrayOfmatch
      );

      //Insertion du commentaire original
      filteredArray.push(originalsComments[iorigin]);
      console.log("isertion du commentaire original: " + filteredArray);

      //insertion  des commentaitres réponses eventuels
      if (arrayOfmatch.length > 0) {
        arrayOfmatch.forEach((commentresponse) => {
          filteredArray.push(commentresponse);
        });
        console.log("isertion du ou des commets response: " + filteredArray);
      }
    }

    console.log("tableau filtré à retourner: " + filteredArray);
    return filteredArray;
  }

  modelComment
    .find({
      pageref: req.params.ref,
      isresponse: false,
    })
    .then((allCommentsOriginals) => {
      arrayOfOriginalsComments = allCommentsOriginals.map((comment) => {
        return comment;
      });
      console.log(
        "tableau des comments originals : " + arrayOfOriginalsComments
      );
      modelComment
        .find({
          pageref: req.params.ref,
          isresponse: true,
        })
        .then((allCommentsResponses) => {
          arrayOfResponsesComments = allCommentsResponses.map((comment) => {
            return comment;
          });
          console.log(
            "tableau des comments responses : " + arrayOfResponsesComments
          );
          if (arrayOfResponsesComments.length > 0) {
            let resultarray = filterArray(
              arrayOfOriginalsComments,
              arrayOfResponsesComments
            );
            console.log("tableau à renvoyer: " + resultarray);
            res.status(200).json(resultarray);
          } else {
            res.status(200).json(arrayOfOriginalsComments);
          }
        })
        .catch((error) => {
          res.status(500).json({
            message:
              "imposssible de trouver les commentaires réponses " + error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "imposssible de trouver les commentaires originaux " + error,
      });
    });
};

