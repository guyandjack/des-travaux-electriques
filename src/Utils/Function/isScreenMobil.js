
/*** fonction qui determine la taille d'ecran**** */

//Import des breakpoints
import { breakPoint } from "../break_point/break_point.js"; 


/********
 
 * return : booleen
 ********/

/******
 * Au dessous ou egal à la valeur "medium_Max" (769px) l'écran est consideré comme écran mobile (rturn true).
 ******/


function isScreenMobil() {
  
    

    if (window.innerWidth >= breakPoint.medium_Max) {
        
       return false;
    }

    else {
        return true;
    }
  

}

export {isScreenMobil}
