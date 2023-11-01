//réalise une requete "fetch" pour la soummission du formulaire.
/**************
 * arg1: évènement "submit" du formulaire concerné
 * arg2: corps de la requete à transmettre
 *************/

function submitFormContact(e, bodyrequest) {
  //évite la soumission automatique du formulaire
  e.preventDefault();

  let urlTestFetch = "http://www.apielectravauxtest.electravaux.com/contact";
  let urlProdFetch = "https://www.apielectravauxproduction.electravaux.com/contact";

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
          if (data.message_status !== "sended") {
            alert(" Une erreur est survenue lors de l’envoi du message !!! \n Votre message ne nous est pas parvenu.");
          } else {
            alert("message recu! 👍 \n il sera traité dans les 48h");
          }
        });
    })

    .then(() => {
      window.location.reload();
    })

    

    .catch((error) => console.log(error));
}

export { submitFormContact };
