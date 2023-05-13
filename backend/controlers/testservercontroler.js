// controler de test du server "planetHoster"

exports.testRouteServer = ((req, res, next) => {

    
    res.status(200).json({ message: " La route de test est bien validée" })
        
        
    .catch((error) => {
          res.status(500).json({
            message:
              "L' environnrment planetHoster ne trouve pas la bonne route"
          });
        });
})