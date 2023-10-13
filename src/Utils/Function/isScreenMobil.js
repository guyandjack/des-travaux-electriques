
/*** fonction qui determine la taille d'ecran**** */

/********
 
 * return : booleen
 ********/

/******
 * En dessous de la valeur "medium_Max" (769px) l'écran est considerer comme écran mobile
 ******/

//Import des breakpoints
import { breakPoint } from "../break_point/break_point.js"; 

function isScreenMobil() {
  
    

    if (window.innerWidth > breakPoint.medium_Max) {
        
       return false;
    }

    if (window.innerWidth <= breakPoint.medium_Max) {
        
        return true;
    }
  

}

export {isScreenMobil}
