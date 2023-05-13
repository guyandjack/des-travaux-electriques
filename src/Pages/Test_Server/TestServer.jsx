//page de test pour le serveur planetHoster

import { json } from "react-router-dom";



function PageTestServer() {
    
    

    function callApi() {

        fetch("http://localhost:3500/api/testserver")
            
            .then((response) => {
                response.json()
                    .then((responses) => {
                        let result = responses.message;
                        
                        document.querySelector(".div-response").textContent = result
                    })
                    
                })
                        
           
          .catch((error) => {
            console.log("msg erreur requette api: " + error);
          });

    }

    
    return (
        <div>
            <h1>test du serveur planetHoster</h1>
            <p>Clicker sur le bouton pour faire un appel à l' api sur le serveur <br></br></p>
            <div onClick={() => { callApi() }}>click ici</div>
            <div className="div-response">
                la reponse est: <br></br> 
            </div>
        </div>
    )
}

export {PageTestServer}