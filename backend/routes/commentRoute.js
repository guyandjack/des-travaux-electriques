/************** objet router definissant toutes les routes "electravaux" **************/

const express = require("express");

const router = express.Router();

const controler = require("../controlers/controlerForm.js");

//router.get("/testbdd", controler.testConnexionBdd);

//router.get("/testserver", controler.testConnexionServer);

//Routes "get"
router.get("/comment-user/:ref", controler.getAllCommentsForOnePage);

//Routes "post"
router.post("/comment-user", controler.testForm);

//Routes "delete"
//Routes "put"

module.exports = router;
