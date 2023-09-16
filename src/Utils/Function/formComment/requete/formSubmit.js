//réalise une requete "fetch" pour la soummission du formulaire.
/**************
 * arg1: évènement "submit" du formulaire concerné
 * arg2: corps de la requete à transmettre
 *************/

function submitForm(e, bodyrequest) {
  //évite la soumission automatique du formulaire
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
      response.json() 
      
        .then((data) => {

          localStorage.setItem("UserSession", data);
          localStorage.setItem("activePage", "0");

        })
        

         
    })

      //.then(window.location.reload())
    

    .catch((error) => console.log(error));
}

export { submitForm };
