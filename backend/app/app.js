//utilisation du module express
const express = require("express");

//module qui permet d' acceder au corps de la requête
const bodyParser = require("body-parser");

//import du fichier de connexion à la base de donnée
const connectDB = require("../services/mongoDB/connexionDataBase.js");

//import du fichier qui contient la logique des routes pour les commentaires
const commentRouter = require("../routes/commentRoutes.js");

//Import du fichier de parametrage des header pour le securityCORS
const securityCORS = require("../middelware/securityCORS.js");

//code principal

//déclaration de notre application avec la méthode express
const app = express();

//permet d'acceder au contenu du corps de la requette
app.use(bodyParser.urlencoded({ extended: true }));

//Connexion à la base de donnee mongo
connectDB.connectToMongo();

//parametrage du header de reponse pour annuler la sécurité "CORS"
app.use("/", securityCORS.setHeaderSecurityCORS);

//route et logique concernant les commentaires des utilisateurs
app.use("/api/comment", commentRouter);

module.exports = app;
