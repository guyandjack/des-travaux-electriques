//determine la taille des images en fonction de la taille de l'écran
//"setFunction" est le seteur d'un hook useState

export function giveImageSize(setfunction) {

    let newSizeScreen = window.innerWidth;
    console.log("nouvelle taille de l' ecran: " + newSizeScreen)

    if (newSizeScreen < 575) {
        setfunction("small");
    }
    if (newSizeScreen >= 575 && newSizeScreen < 992) {
        setfunction("medium");
    }
    if (newSizeScreen >= 992) {
        setfunction("large");
    }

    
}