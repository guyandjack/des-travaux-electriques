//Réalise une requete "fetch" pour récupérer les commentaires corespondant à la page consultée 
//Reqûete émise dans script de page;

/********************************
//refpage = reference de la page
//setfunction le seteur d' une variable "usestate" qui contient un tableau

***********************************/

//fonction de tri par ordre croissant pour la method "sort"
  function sortByLowerToUpper(a, b) {
    return a.id - b.id
};
  

export function fetchCommentsForOnePage(refpage, setfunction) {

  let urlTestFetch = "http://www.apielectravauxtest.electravaux.com/comment-user/";
  let urlProdFetch = "https://www.apielectravaux.electravaux.com/comment-user/";

  fetch(
    urlProdFetch + refpage,
    {
      headers: {
        "Accept": "application/json, text/plain",
        "Content-Type" : "application/json",
      },
      method: "GET",
      //mode: "no-cors",
      
    }
  )
    .then((response) => {

      
      return response.json()

        .then((data) => {
          //tri le tableau par ordre croissant de "id"
          data.sort(sortByLowerToUpper);
          setfunction(data);
          
        })
      
      
    })

    .catch((error) => {
      console.log("msg erreur requette api: " + error);
    });
}

/*export function fetchCommentsForOnePageTest(refpage, setfunction) {
  fetch(
    "http://www.apielectravauxtest.electravaux.com/comment-user/" + refpage,
    {
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      method: "GET",
      //mode: "no-cors",
    }
  )
    .then((response) => {
      return response
        .json()

        .then((data) => {
          //tri le tableau par ordre croissant de "id"
          data.sort(sortByLowerToUpper);
          setfunction(data);
        });
    })

    .catch((error) => {
      console.log("msg erreur requette api: " + error);
    });
}*/