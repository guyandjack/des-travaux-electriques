//Active un seteur useState placé en parametre qui determine le type de format d' images 
//en fonction de la taille de l'écran.

/******
 * arg: "setFunction" est le seteur d'un hook useState
 * return: void
 */
//

export function giveImageSize(setfunction) {

    let newSizeScreen = window.innerWidth;

    
    if (newSizeScreen >= 0 && newSizeScreen <= 575) {
      setfunction("small") ;
    }
    
    if (newSizeScreen >= 576 && newSizeScreen <= 768) {
      setfunction("small");
    }

    if (newSizeScreen >= 769 && newSizeScreen <= 992) {
      setfunction("medium");
    }

    if (newSizeScreen >= 993 && newSizeScreen <= 1500) {
      setfunction("large");
    }

    
}

