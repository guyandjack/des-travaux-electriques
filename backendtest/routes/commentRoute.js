/******************************************************************************** */
/**************  definission de toutes les routes "electravaux" **************/
/***************************************************************************** */

//Import du package "express"
const express = require("express");

//Instance de l' objet "Router"
const router = express.Router();

//Import du controler qui gerele données issues du formulaire
const checkFieldForm = require("../controler/controlerForm.js");

//Import du controler qui recupere les commentaires issus de la bdd, pour la page consultée
const getAllComments = require("../controler/getAllComments.js");


/************  ensemble des routes  ****************** */

//Routes "get"
router.get("/comment-user/:ref", getAllComments.getAllCommentsForOnePage);

//Routes "post"
router.post("/comment-user/form", checkFieldForm.testForm);

module.exports = router;
