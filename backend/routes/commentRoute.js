/************** objet router definissant toutes les routes "electravaux" **************/

const express = require("express");

const router = express.Router();

//const controler = require("../controler/controlerForm.js");

//router.get("/testbdd", controler.testConnexionBdd);

//router.get("/testserver", controler.testConnexionServer);

//Routes "get"
//router.get("/comment-user/:ref", controler.getAllCommentsForOnePage);

//Routes "post"
//router.post("/comment-user", controler.testForm);

//route "get"
router.get("/", (req, res) => {
  res.status(200).json({ "message ": "tous les commentaires récupérés" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ "message ": "un seul  commentaire récupéré" });
});

router.get("/guigui", (req, res) => {
  res
    .status(200)
    .json({ "message ": "tous les commentaires de guigui récupérés" });
});

//route "post"
router.post("/", (req, res) => {
  res
    .status(201)
    .json({ message: "commentaire user enregistrés dans la bdd " });
});

//route "delete"
router.delete("/", (req, res) => {
  res
    .status(201)
    .json({ message: "Tous les commentaire user suprimés de la bdd " });
});

router.delete("/:", (req, res) => {
  res.status(201).json({ message: "commentaire user suprimé de la bdd " });
});

//route "put"
router.put("/", (req, res) => {
  res.status(201).json({ message: "commentaire user mis à jour " });
});

router.put("/:id", (req, res) => {
  res.status(201).json({ message: "commentaire user mis à jour " });
});

module.exports = router;
