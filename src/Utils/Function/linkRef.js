//Fonction qui permet d' acceder a un endroit precis sur la page suite à un click sur lien

export function linkRef() {

    //Element du DOM
    let cguTitle = document.querySelector(".cgu__title");
    let cguMentionsLegales = document.getElementById("2");
    let cguPolitique = document.getElementById("9");

    //Url de la page active
    let url = window.location.href;


    //Recupere dans l' url l' id de l'article de la page des CGU
    let array = url.split("/");
    let idArticle = array[array.length - 1];

        
    if (idArticle == 1) {
        
        cguTitle.scrollIntoView();
    }
    if (idArticle == 2) {
        
        cguMentionsLegales.scrollIntoView();
    }
    if (idArticle == 9) {
        
        cguPolitique.scrollIntoView();
    }
   

}