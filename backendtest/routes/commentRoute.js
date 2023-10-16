/******************************************************************************** */
/**************  definission de toutes les routes "electravaux" **************/
/***************************************************************************** */

//Import du package "express"
const express = require("express");

//Instance de l' objet "Router"
const router = express.Router();

//Import du controler qui gere les données issues du formulaire des commentaires
const checkFieldForm = require("../controler/controlerForm.js");

//Import du controler qui recupere les commentaires issus de la bdd, pour la page consultée
const getAllComments = require("../controler/getAllComments.js");

//Import du controler qui gere les donnés du formulaire de la page "contact"
const checkFieldFormContact = require("../controler/controlerFormContact.js");


/************  ensemble des routes  ****************** */

//Routes "get"
router.get("/comment-user/:ref", getAllComments.getAllCommentsForOnePage);

//Routes "post"

/**** permet de poster un commentaire **** */
router.post("/comment-user/form", checkFieldForm.testForm);

/***** permet d'envoyer un mail   ******* */
router.post("/contact", checkFieldFormContact.testFormContact, checkFieldFormContact.sendMail);

module.exports = router;
