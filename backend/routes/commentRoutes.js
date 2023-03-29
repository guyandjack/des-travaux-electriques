/************** objet router definissant toutes les routes "comment" **************/

const express = require("express");

const routerComment = express.Router();

//import du fichier qui controle la logique des midellwares concernant les commentaires
const commentControler = require("../controlers/commentControler.js");



/****************** route "POST" ************************ */

//route pour enregistrer un nouveau commentaire 
routerComment.post("/", commentControler.checkDataForm);


/****************** route "GET" ************************ */

// route pour recuperer les commentaires de la page client consulté
routerComment.get("/:ref", commentControler.getAllCommentsForOnePage);


module.exports = routerComment;
