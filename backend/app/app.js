//utilisation du module express
const express = require("express");

//module qui permet d' acceder au corps de la requête
const bodyParser = require("body-parser");

//import du fichier qui contient la logique des routes pour les commentaires
const commentRouter = require("../routes/commentRoutes.js");

//import du fichier qui contient la logique des routes pour le test server
const serverTest = require("../routes/testServerRoute.js");

//Import du fichier de parametrage des header pour le securityCORS
const securityCORS = require("../middelware/securityCORS.js");

//code principal

//déclaration de notre application avec la méthode express
const app = express();

// permet d' exploiter le contenu json du corps des requettes
app.use(express.json());

//permet d'acceder au contenu du corps de la requette
app.use(bodyParser.urlencoded({ extended: true }));

//parametrage du header de reponse pour annuler la sécurité "CORS"
app.use("https://electravaux.com", securityCORS.setHeaderSecurityCORS);

//route et logique concernant les commentaires des utilisateurs
app.use("https://electravaux.com/api/comment", commentRouter);

//Route et logique du teste server + bdd
app.use("https://electravaux.com/api", serverTest);

module.exports = app;
