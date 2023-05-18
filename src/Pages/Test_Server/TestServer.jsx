//page de test pour le serveur planetHoster


function PageTestServer() {
        

    function callApi() {

        fetch("https://electravaux.com/api/testserver")
          .then((response) => {
            response.json().then((responses) => {
              let result = responses.message;

              document.querySelector(".div-response").textContent = result;
            });
          })

          .catch((error) => {
            console.log("msg erreur requette api: " + error);
          });

    }

    function callApiBdd() {
        fetch("https://electravaux.com/api/testbdd")
          .then((response) => {
            response.json().then((responses) => {
              let result = responses.message;

              document.querySelector(".div-response-2").textContent = result;
            });
          })

          .catch((error) => {
            console.log("msg erreur requette api: " + error);
          });
    }

    
    return (
      <div>
        <div>
          <h1>
            test du serveur planetHoster<br></br>
          </h1>

          <div
            onClick={() => {
              callApi();
            }}
          >
            click ici pour tester le serveur
            <br></br>
          </div>
          <div className="div-response">
            la reponse est: <br></br>
          </div>
        </div>
        <div>
          <h1>
            test de la bdd mysql planetHoster<br></br>
          </h1>

          <div
            onClick={() => {
              callApiBdd();
            }}
          >
            click ici  pour tester la connexion avec la bdd
            <br></br>
          </div>
          <div className="div-response-2">
            la reponse est: <br></br>
          </div>
        </div>
      </div>
    );
}

export {PageTestServer}