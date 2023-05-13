/************** objet router definissant toutes les routes "testserver" **************/

const express = require("express");

const routerTestServer = express.Router();


//import du fichier qui controle la logique test server
const testControler = require("../controlers/testservercontroler.js");

routerTestServer.use("/", testControler.testRouteServer);

module.exports = routerTestServer