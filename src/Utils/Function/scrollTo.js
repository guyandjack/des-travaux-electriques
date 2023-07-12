//Fonction qui realise un scroll sur un element du dom
//return: Void
//argument: selecteur css format string

function scrollTo(selector){
    let target = document.querySelector(selector);
    let position = target.getBoundingClientRect();

    //Correction permettant de prendre en compte la hauteur de 80px du menu de navigation principal en position sticky.
    let scrollCorrection = Math.round(position.top - 80);
    console.log("valeur de X: " + Math.round(position.top));

    window.scrollBy(0, scrollCorrection);
    
    
}

export {scrollTo}