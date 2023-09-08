//realise une requete "fetch" pour la soummission du formulaire.

 function submitForm(e, bodyrequest) {

  //evite la soumission automatique du formulaire
  e.preventDefault();

  fetch("http://www.apielectravauxtest.electravaux.com/comment-user/form", {
    headers: {
      Accept: "application/json, text/plain",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(bodyrequest),
  })
    .then((response) => {
      console.log(
        "type du resultat brut de la requette formulaire: " + typeof response
      );
      console.log("resultat brut de la requette formulaire: " + response);
      response
        .json()
        .then((data) => {
          console.log(
            "type du resultat 'jsoned' de la requette formulaire: " +
              typeof data
          );
          console.log("resultat 'jsoned' de la requette formulaire: " + data);
          JSON.stringify(data);
        })
        .then((datastringed) => {
          console.log(
            "type du resultat 'stringified' de la requette formulaire: " +
              typeof datastringed
          );
          console.log(
            "resultat 'stringified' de la requette formulaire: " + datastringed
          );

          localStorage.setItem("session", datastringed);
          localStorage.setItem("activePage", "0");
          
        })
        
      //.then(window.location.reload())
    })

    .catch((error) => console.log(error));
}

export {submitForm}
