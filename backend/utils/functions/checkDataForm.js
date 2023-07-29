/*********************************************************************************************************
 * *****************************************************************************************************
 *                 fonctions utilisées par les middelwares de "commentControleur2"                        *
 * ******************************************************************************************************
 * ************************************************************************************************* */

/*********************************************************************************************************
 *                         fonctions qui controlent les data issues du formulaire                        *
 ******************************************************************************************************* */
//Import du module "mysql"
const mysql = require("mysql");

//import des regEx pour les fonctions de controle des donées du formulaire
const regEx = require("../expressionReguliere/RegExForm.js");

//Valide l' input "lastName"
function validLastName(lastName) {
  if (
    
    regEx.masquetext.test(lastName) !== true ||
    lastName === null ||
    lastName === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
}

//Valide l' input "firstName"
function validFirstName(firstName) {
  if (
    regEx.masquetext.test(firstName) !== true ||
    firstName === null ||
    firstName === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
}

//Valide l' input "mail"
function validMail(email) {
  if (
    regEx.masquemail.test(email) !== true ||
    email === null ||
    email === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
}

//Valide le message utilisateur
function validMessage(comment) {
  if (
    regEx.masquemessage.test(comment) !== true ||
    comment === null ||
    comment === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
}

//Valide la réference de la page
function validReferencePage(refPage) {
  if (
    regEx.masquealphanumerique.test(refPage) !== true ||
    refPage === null ||
    refPage === "undefined"
  ) {
    return false;
  } else {
    return true;
  }
}

//Valide un entier qui indique si le commentaire est une réponse à un autre commentaire
function validIsResponse(isResponse) {
  if (isResponse === 1 || isResponse === 0) {
    return true;
  } else {
    return false;
  }
}

//Valide l' id du commentaire original
function validOriginalCommentId(originalCommentId) {
  if (
    originalCommentId === null ||
    originalCommentId === "undefined" ||
    !originalCommentId
  ) {
    
    return {
        test : true,
        neworiginalid : -1
    };
  }

  if (regEx.masquenumber.test(originalCommentId) !== true) {
    return false
  } else {
    return {
      test: true,
      neworiginalid: originalCommentId
    };
  }
}

//valide l'autorisation d' enregistrer une session utilisateur
function validCheckbox(userData) {
  //La valeur du checkbox peut etre nulle, ou absente.

  if (userData === null || userData === "undefined") {
    return false;
  }



  if (regEx.masquecheckbox.test(userData) !== true) {
    return false;
  } else {
    return true;
  }
}

/********************************************************************************************************
 *                              fonctions diverse du middelware                                        *
 * *****************************************************************************************************/

//Recupere l'adresse ip de l'utilisateur

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

//creation d' un objet à renvoyer au frontend suite à l' enregistrement d' un commentaire

function objectResponse(lastName, firstName, email, checkboxvalue) {
  let object = {};

  if (checkboxvalue == "ok") {
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

function createConnexionMysql() {
    let connection = mysql.createConnection({
      host: "localhost",
      user: "kvyjmgfk_admin",
      password: "Poweradmin65!",
      database: "kvyjmgfk_electravaux",
    });
    return connection
}

module.exports = {
  validlastname: validLastName,
  validfirstname: validFirstName,
  validmail: validMail,
  validmessage: validMessage,
  validreferencepage: validReferencePage,
  validisresponse: validIsResponse,
  validoriginalcommentid: validOriginalCommentId,
  validcheckbox: validCheckbox,
  getuserip: getUserIP,
  objectresponse: objectResponse,
  createconnexionmysql: createConnexionMysql,
};
