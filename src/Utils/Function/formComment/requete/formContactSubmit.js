//réalise une requete "fetch" pour la soummission du formulaire.
/**************
 * arg1: évènement "submit" du formulaire concerné
 * arg2: corps de la requete à transmettre
 *************/

function submitFormContact(e, bodyrequest) {
  //évite la soumission automatique du formulaire
  e.preventDefault();

  fetch("http://www.apielectravauxtest.electravaux.com/contact", {
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
          console.log(data)
        });
    })

    //.then(window.location.reload())

    .catch((error) => console.log(error));
}

export { submitFormContact };
