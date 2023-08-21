//Import des packages

const express = require("express");
const bodyparser = require("body-parser");

//Import des functions
const securityCORS = require("./middelware/securityCORS.js");

//Import des routes
const routeApiCommentUser = require("./routes/commentRoute.js");

//Appli express
const appli = express();

//parametrage du header de réponse pour annuler la sécurité "CORS"
appli.use( securityCORS.setHeaderSecurityCORS);

//permet d' exploiter le contenu json du corps des requettes
appli.use(express.json());

//permet d'acceder au contenu du corps de la requette
appli.use(bodyparser.urlencoded({ extended: true }));

//Routes principales
appli.use("/comment-user", routeApiCommentUser);

module.exports = appli;
