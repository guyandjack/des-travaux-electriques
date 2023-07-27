//Import des fonctions de controle des inputs issues du formulaire
const { createconnexionmysql } = require("../utils/function/check_data_user/check_data_user.js");
const checkForm = require("../utils/function/check_data_user/check_data_user.js");


// controler de test du server "planetHoster"

exports.testRouteServer = ((req, res, next) => {


    res.status(200).json({ message: " La route de test pour l'api est bien validée" })
        
        
        .catch((error) => {
            res.status(500).json({
                message:
                    "L'environnrment planetHoster ne trouve pas la bonne route"
            });
        });
    
});


// controler de la connexion de la bdd "planethoster"
exports.testRouteBdd = ((req, res) => {
    // parametre de connexion
    let connexion = checkForm.createconnexionmysql();
    
    //Connection à la bdd sql "travaux_electriques"
    connexion.connect(function (err) {
        if (err) {
            res
                .status(500)
                .json({ message: "impossible de se connecter à la bdd" });
        
            connexion.end();
        }
      

        let date = new Date();
    
        res
            .status(200)
            .json({ message: "Connecté à la bdd travaux_electriques à: " + date })

            
        
        connexion.end();
    })
    
})