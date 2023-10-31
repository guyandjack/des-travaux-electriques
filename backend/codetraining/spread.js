
//Contient les fonction de control des data du formulaire.
const checkForm = require("../utils/functions/checkDataForm.js");

let objectData = {

     "lastname" : "masterofpuppet",
    "firstname": "tolier",
    "email": "stanlee@free.fr",
    "comment": "j' ecris des comics....",
    "pageref": "pc16a",
    "isresponse":0,
    "originalcommentid":"-1",
    "userdata":"ok",
    "userurl":"http://localhost:3000/schema/pc16a",
    "sujet":"22"
    
}

let tabRefOfKeys = [
  "lastname",
  "firstname",
  "email",
  "comment",
  "pageref",
  "isresponse",
  "originalcommentid",
  "userdata",
  "userurl",
  "sujet"
];

//Récuperation des clefs du corps de la requete
let listOfKeys = Object.keys(objectData);
  
  //Si le tableau des clefs vide on renvoi un message d'erreur
  if (listOfKeys.length < 1) {
    //res.status(200).json({ "me": " 01B" });
      console.log("erreur 01B")
  }

let isAllKeys = checkForm.checkreqbodykeys(listOfKeys, tabRefOfKeys);
console.log("valeur de isAllKeys: " + isAllKeys);
  //Si toutes les clefs attendues ne sont pas presente on renvoi un message d' erreur
  if (isAllKeys !== true) {
    //res.status(200).json({"me": " 02B"})
      console.log("error : 02B");
}
  else {
      console.log("toutes les proprietes sont presente.")
  }