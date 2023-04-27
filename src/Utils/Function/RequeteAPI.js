//Réalise une requete "fetch" pour récupérer les commentaires corespondant à la page consultée
//refpage = reference de la page
//setfunction le seteur d' une variable "usestate" qui contient un tableau
export function fetchCommentsForOnePage(refpage, setfunction) {

    fetch("http://localhost:3500/api/comment/" + refpage)
        
      .then((response) => {
        response.json().then((responses) => {
          setfunction(JSON.parse(responses));
        });
      })

      .catch((error) => {
        console.log("msg erreur requette api: " + error);
      });
}