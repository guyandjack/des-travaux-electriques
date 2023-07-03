//Fonction qui teste et valide les inputs user du formulaire de la page contact

/********************** expressions regulieres ******************/

//Motif qui autorise lettres majuscules et minuscules uniquement
let masqueText = /^[A-Za-z_'.-]{2,20}$/;

//Motif qui autorise une adresse mail qui peut commencer par:
//0 ou 4 chiffres
//suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
//suivi d' un arobase
//suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
//suivi d' un point
//suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
let masqueMail = /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,15}\.[0-9a-zA-Z_'.-]{2,15}$/;

//Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, et underscore de 10 a 200 caracteres
let masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!ç\n\s]{10,200}$/;


/********************  fonctions    ************** */


/****** fonction de validation des inputs user************ */

//Valide l' input "lastName"
function validLastName(e) {
  if (masqueText.test(e.target.value) !== true) {
    return false;
  } else {
    return true;
  }
}

//Valide l' input "firstName"
function validFirstName(e) {
  if (masqueText.test(e.target.value) !== true) {
    return false;
  } else {
    return true;
  }
}

//Valide l' input "mail"
function validMail(e) {
  if (masqueMail.test(e.target.value) !== true) {
    return false;
  } else {
    return true;
  }
}

//Valide le message utilisateur
function validMessage(e) {
  if (masqueMessage.test(e.target.value) !== true) {
    return false;
  } else {
    return true;
  }
}

//Valide le formulaire
function validForm(inputlastname, inputfirstname, inputemail, inputmessage, seter) {
    console.log("valeur de name: " + inputlastname);
    console.log("valeur de firstname: " + inputfirstname);
    console.log("valeur de email: " + inputemail);
    console.log("valeur de text: " + inputmessage);
    if (
      masqueText.test(inputlastname) === true &&
      masqueText.test(inputfirstname) === true &&
      masqueMail.test(inputemail) === true &&
      masqueMessage.test(inputmessage) === true
 ) {
        
           seter("")
    
    }
    else {
        
        
          seter("disabled");
    
    }
}

export { validLastName, validFirstName, validMail, validMessage, validForm };
