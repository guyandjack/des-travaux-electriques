/****************************************************************************************************/

//Le controler "getAllCommentsForOnePage" permet à chaque page de récuperer les commentaires utilisateurs 
//correspondants.

/****************************************************************************************************/

//Import des fonctions

//Contient les parametres de connexion de la bdd.
const connectToBdd = require("../utils/functions/connexionBdd.js");

//Middelware qui récupere tous les commentaires correspondant à la page consultée.

exports.getAllCommentsForOnePage = (req, res, next) => {
  //Recuperation de la reference de la page consultée.
  let param = req.params.ref;

  //recuperation des commentaires dans la base sql

  // definition des parametre de connexion
  const connection = connectToBdd.connexionToBddTest();

  /************** requetes preparées************* */

  //Requete type "select All comments"
  let requeteSelectAllCommentsFromPage = `SELECT id, firstname, content, date, originalcommentid, response FROM user_comment_test WHERE pageref = ?`;

  //parametres de la requete "select page comments"
  let paramSelectAllCommentsFromPage = [param];

  //Connection à la bdd sql "travaux_electriques"
  connection.connect(function (err) {
    if (err) {
      res.status(400).json({ "message: ": "probleme identifiant connexion" });
      return console.error("error de connection: " + err.message);
    }
    let date = new Date();
    console.log("Connecté à la bdd 'travaux_electriques' à :  " + date);
    connection.query(
      requeteSelectAllCommentsFromPage,
      paramSelectAllCommentsFromPage,

      (err, result) => {
        //gestion des erreurs
        if (err) {
          res.status(500).json({
            message:
              "impossible de recuperer les commentaires pour cette page: " +
              err,
          });

          //fermeture connection
          connection.end();
        }

        //gestion du resultat

        //renvoyer au client un objet json  "result"

        res.status(200).json(result);

        connection.end();
      }
    );
  });
};
