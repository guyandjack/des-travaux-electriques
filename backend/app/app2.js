//utilisation du module express
const express = require("express");


//module qui permet d' acceder au corps de la requête
const bodyParser = require("body-parser");


//import du fichier qui contient la logique des routes pour les commentaires
const commentRouter = require("../routes/commentRoutes.js");

//Import du fichier de parametrage des header pour le securityCORS
const securityCORS = require("../middelware/securityCORS.js");

//code principal

//déclaration de notre application avec la méthode express
const app = express();

//permet d'acceder au contenu du corps de la requette
app.use(bodyParser.urlencoded({ extended: true }));

//parametrage du header de reponse pour annuler la securite "CORS"
app.use("/", securityCORS.setHeaderSecurityCORS);

//route et logique concernant les commentaires des utilisateurs
app.use("/api/comment", commentRouter);

module.exports = app;
