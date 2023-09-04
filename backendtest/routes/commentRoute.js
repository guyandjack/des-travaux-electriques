/************** objet router definissant toutes les routes "electravaux" **************/

const express = require("express");

const router = express.Router();

const controler = require("../controler/controlerForm.js");

//router.get("/testbdd", controler.testConnexionBdd);

//router.get("/testserver", controler.testConnexionServer);

//Routes "get"
router.get("/comment-user/:ref", controler.getAllCommentsForOnePage);

//Routes "post"
router.post("/comment-user/form", controler.testForm);

//route testst
router.delete("/comment-user", (req, res) => {
  res.status(250).json({ "message: ": "la route est propre jusqu ici" });
});

module.exports = router;
