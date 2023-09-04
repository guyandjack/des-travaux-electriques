//Réalise une requete "fetch" pour récupérer les commentaires corespondant à la page consultée
//refpage = reference de la page
//setfunction le seteur d' une variable "usestate" qui contient un tableau
export function fetchCommentsForOnePage(refpage, setfunction) {

  fetch(
    "http://www.apielectravaux.electravaux.com/comment-user/" + refpage,
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
          for (let i = 0; i < data.length; i++) {
            console.log("user-number: " + i + "user-name: " + data[i].lastname);
          }
          setfunction(data);
          
        })
      
      
    })

    .catch((error) => {
      console.log("msg erreur requette api: " + error);
    });
}

export function fetchCommentsForOnePageTest(refpage, setfunction) {
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
          for (let i = 0; i < data.length; i++) {
            console.log("user-number: " + i + "user-name: " + data[i].lastname);
          }
          setfunction(data);
        });
    })

    .catch((error) => {
      console.log("msg erreur requette api: " + error);
    });
}