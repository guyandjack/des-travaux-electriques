//Fonction qui permet d' acceder a un endroit precis sur la page suite à un click sur lien

//import des functions
import { scrollTo } from "../Function/scrollTo.js";

export function linkRef() {

    //Element du DOM
    let cguTitle = document.querySelector(".cgu__title");

    //Syntaxe pour utiliser "querySelector" avec de id
    let cguMentionsLegales = "[id='2']";
    let cguPolitique = "[id='9']";

    //Url de la page active
    let url = window.location.href;


    //Recupere dans l' url, l'id de l'article de la page des CGU
    let array = url.split("/");
    let idArticle = array[array.length - 1];

        
    if (idArticle == 1) {
        
        cguTitle.scrollIntoView();
    }
    if (idArticle == 2) {
        
        scrollTo(cguMentionsLegales);
    }
    if (idArticle == 9) {
        
        scrollTo(cguPolitique);
    }
   

}