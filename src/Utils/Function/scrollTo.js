//Fonction qui realise un scroll sur un element du dom
//return: Void
//argument: selecteur css format string

function scrollTo(selector){
    let target = document.querySelector(selector);
    target.scrollIntoView();
}

export {scrollTo}