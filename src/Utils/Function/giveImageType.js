//Active un seteur useState placé en parametre qui determine le type de format d' images 
//en fonction de la taille de l'écran.

/******
 * 
 * return: string
 */
//

// import des breakpoint
import { breakPoint } from "../break_point/break_point.js";

 function giveImageType() {

    let newSizeScreen = window.innerWidth;

    
      
    if (newSizeScreen <= breakPoint.medium_Max) {
      return "small"
    }

    if (newSizeScreen <= breakPoint.large_Min) {
      return "medium";
    }

    if (newSizeScreen > breakPoint.large_Max) {
      return "large"
    }

    
}
 export {giveImageType}

