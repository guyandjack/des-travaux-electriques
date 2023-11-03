//Réalise une requete "fetch" pour la soummission du formulaire des commentaires.
//Requete émise dans le composant "Formulaire.jsx" lors de la soumission du formulaire

/************************************************
 * arg1: évènement "submit" du formulaire concerné
 * arg2: corps de la requete à transmettre
 ***********************************************/

function submitForm(e, bodyrequest) {
  //évite la soumission automatique du formulaire
  e.preventDefault();
  let urlTestFetch =  "http://www.apielectravauxtest.electravaux.com/comment-user/form";
  let urlProdFetch =  "https://www.apielectravauxproduction.electravaux.com/comment-user/form";

  fetch(urlProdFetch, {
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(bodyrequest),
  })
    .then((response) => {
      response
        .json()

        .then((data) => {
          let result = JSON.parse(data);
          console.log("objet renvoyer par le backend apres insertion commentaire: " + result);
          console.log("propriete statusRequest: " + result.statusRequest);
          if (result.statusRequest !== "sended") {
            alert(
              "Une erreur est survenue,\n votre commentaire n'a pas été envoyé!"
            );
          } else {
            localStorage.setItem("UserSession", data);
            localStorage.setItem("activePage", "0");
            alert("Merci pour votre commentaire! 👋");
          }
        });
    })

    .then(() => {
      window.location.reload();
    })

    .catch((error) => console.log(error));
}

export { submitForm };
