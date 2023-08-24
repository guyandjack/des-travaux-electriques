//Réalise une requete "fetch" pour récupérer les commentaires corespondant à la page consultée
//refpage = reference de la page
//setfunction le seteur d' une variable "usestate" qui contient un tableau
export function fetchCommentsForOnePage(refpage, setfunction) {

  fetch(
    "https://www.apielectravaux.electravaux.com/comment-user/" + refpage,
    {
      headers: {
        "Accept": "application/json, text/plain",
        "Content-Type" : "application/json",
      },
      method: "GET",
      mode: "no-cors",
      
    }
  )
    .then((response) => {

      console.log(JSON.parse(response));

      console.log(
        "type de reponses de la requete pour récuperer les commentaires: " +
          typeof response
      );
      console.log(
        "valeur de la reponses de la requete pour récuperer les commentaires: " +
          response
      );
      console.log("longeur de l'objet response: " + response.length);

      for (let i = 0; i < response.length; i++) {
        console.log("user-number: " + i + "user-name: " + response[i].lastname);
      }
      setfunction(response);
    })

    .catch((error) => {
      console.log("msg erreur requette api: " + error);
    });
}