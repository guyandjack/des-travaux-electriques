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
  res.status(200).json({ "message ": "tous les commentaires récupérés" })
  .catch((err)=>{
      res.status(500).json({err})
  })
});

router.get("/:id", (req, res) => {
  res.status(200).json({ "message ": "un seul  commentaire récupéré" })
  .catch((err)=>{
      res.status(500).json({err})
  })
});

router.get("/guigui", (req, res) => {
  res
    .status(200)
    .json({ "message ": "tous les commentaires de guigui récupérés" })
    .catch((err)=>{
        res.status(500).json({err})
    })
});

//route "post"
router.post("/", (req, res) => {
  res
    .status(201)
    .json({ "message": "commentaire user enregistrés dans la bdd " })
    .catch((err)=>{
        res.status(500).json({err})
    })
});

//route "delete"
router.delete("/", (req, res) => {
  res
    .status(201)
    .json({ "message": "Tous les commentaire user suprimés de la bdd " })
    .catch((err)=>{
        res.status(500).json({err})
    })
});

router.delete("/:", (req, res) => {
  res.status(201).json({ message: "un commentaire user suprimé de la bdd " })
  .catch((err)=>{
      res.status(500).json({err})
  })
});

//route "put"
router.put("/", (req, res) => {
  res.status(201).json({ "message": "tous les commentaires user mis à jour " })
  .catch((err)=>{
      res.status(500).json({err})
  })
});

router.put("/:id", (req, res) => {
  res.status(201).json({ "message": "Un seul commentaire user mis à jour " })
  .catch((err)=>{
      res.status(500).json({err})
  })
});

module.exports = router;
