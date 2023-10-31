/*********************************************************************************************************
 * *****************************************************************************************************
 *                 fonctions utilisées par le controler "controlerForm.js"                        *
 * ******************************************************************************************************
 * ************************************************************************************************* */

//import des regEx pour les fonctions de controle des donées du formulaire
const regEx = require("../regEx/RegExForm.js");

//Import du tableau qui contient les "references de page" creés par le frontend
const refPageValided = require("../../data/refpage/refpage.js");

/*********************************************************************************************************
 *                         Fonctions qui controlent la présence des data issues du formulaire                        *
 ******************************************************************************************************* */

//verifie si toutes les champs du formulaires sont present dans le corps de la requete

function checkReqBodyKeys(listOfKeys, tabRefOfKeys) {

  
  //Si les tableaux n' ont pas la meme longeur, c'est qu' ils sont differents
  if (listOfKeys.length !== tabRefOfKeys.length) {
    return false
  }

  let tabMatchingValue = tabRefOfKeys.map((key) => { listOfKeys.includes(key) });
  
  //Si le tableau des valeurs trouvées a la même longeur que le tableau de référence
  //alors tous les champs attendus sont présent dans le corps de la requette
  if (tabMatchingValue.length === tabRefOfKeys.length) {
    return true
  }

  return false

}



  
/*********************************************************************************************************
 *                         Fonctions qui controlent la validité des data issues du formulaire                        *
 ******************************************************************************************************* */


//Valide l' input "lastName"
function validLastName(lastName, tabValidInput) {
  
  if (
    
    regEx.masquetext.test(lastName) !== true
  ) {
    tabValidInput.push({ lastname:" Valeur du champ non validé"})
    return false;
  } else {
    return true;
  }
}

//Valide l' input "firstName"
function validFirstName(firstName, tabValidInput) {
  if (
    regEx.masquetext.test(firstName) !== true 
  ) {
    tabValidInput.push({ firstname:" Valeur du champ non validé"})
    return false;
  } else {
    return true;
  }
}

//Valide l' input "mail"
function validMail(email, tabValidInput) {
  if (
    regEx.masquemail.test(email) !== true 
  ) {
    tabValidInput.push({ email:" Valeur du champ non validé"})
    return false;
  } else {
    return true;
  }
}

//Valide le message utilisateur
function validMessage(comment, tabValidInput) {
  if (
    regEx.masquemessage.test(comment) !== true 
  ) {
    tabValidInput.push({ comment:" Valeur du champ non validé"})
    return false;
  } else {
    return true;
  }
}

//Valide la réference de la page
function validReferencePage(refPage, tabValidInput) {
  
  let foundedRef = refPageValided.includes(refPage); 

  if(!foundedRef ){
    tabValidInput.push({ refpage:" Valeur du champ non validé"})
    return false;
  } else {
    return true;
  }
}

//Valide un entier qui indique si le commentaire est une réponse à un autre commentaire
function validIsResponse(isResponse, tabValidInput) {

  if (isResponse > 1 || isResponse < 0) {
    tabValidInput.push({ isresponse:" Valeur du champ non validé"})
    return false;
  } 
  else {
    return true
  }
  
}

//Valide l' id du commentaire original
function validOriginalCommentId(originalCommentId, tabValidInput) {
  
  if (regEx.masquenumber.test(originalCommentId) !== true) {
    tabValidInput.push({ originalid:" Valeur du champ non validé"})
    return false
  } else {
    return true
  }
}

//valide l'autorisation d' enregistrer une session utilisateur

function validCheckbox(userData, tabValidInput) {
  //La valeur du checkbox peut etre nulle, ou absente.

  if (regEx.masquecheckbox.test(userData) !== true) {
    tabValidInput.push({ userdata:" Valeur du champ non validé"})
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
  return JSON.stringify(object);
}



module.exports = {
  //test de présence
  checkreqbodykeys : checkReqBodyKeys,
  
  //test de validité
  validlastname: validLastName,
  validfirstname: validFirstName,
  validmail: validMail,
  validmessage: validMessage,
  validreferencepage: validReferencePage,
  validisresponse: validIsResponse,
  validoriginalcommentid: validOriginalCommentId,
  validcheckbox: validCheckbox,

  //recuperation de l'IP
  getuserip: getUserIP,

  //Objet röponse ä renvoyer au front end
  objectresponse: objectResponse,
};
