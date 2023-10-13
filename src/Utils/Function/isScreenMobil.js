
/*** fonction qui determine la taille d'ecran**** */

/********
 * arg 1: est la fonction seteur d'un hook "useState" 
 * return : null
 ********/

/******
 * En dessous de la valeur "medium_Max" (769px) l'écran est considerer comme écran mobile
 ******/

//Import des breakpoints
import { breakPoint } from "../break_point/break_point.js"; 

function isScreenMobil() {
  
    console.log("nouvelle taille de l'ecran dans la fonction isScreenMobil: " + window.innerWidth);

    if (window.innerWidth > breakPoint.medium_Max) {
        console.log("la fonction isScreenMobil retourne  FALSE");
       return false;
    }

    if (window.innerWidth <= breakPoint.medium_Max) {
        console.log("la fonction isScreenMobil retourne  TRUE");
        return true;
    }
  

}

export {isScreenMobil}
