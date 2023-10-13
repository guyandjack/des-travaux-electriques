//Composant "TitleHn"

/*********
 * Ce composant à 5 props qui le définissent
 * 
 * titleText = Une chaine de caractere qui definit le titre(mon titre...)
 * titlelevel = Une chaine qui definit le niveau de titre (h1,h2.....)
 * titleSize = Une chaine qui definit la taille de la popilice en "em" (1em,0.8em,2em.....)
 * titleColor = Une chaine qui definit la couleur de la police (first-color, second-color....)
 * titleId = Une chaine qui definit l' id du composant titre (#mon id...)
 * 
 */

//Import des hooks
import { useState, useEffect, useRef } from "react";

//Import des break points
import { breakPoint } from "../../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../../Style/CSS/title_n.css";

//Fonction "Title"

function TitleHN({ titleText, titleLevel, titleSize, titleColor, titleId }) {

//declaration des "state"
  
  //const [isSmallScreen, setIsSmallScreen] = useState(true);
  //const [titleFontSize, setTitleFontSize] = useState("0.8em");

//declaration des fonctions
  function titleGoodSize() {

    let titleSelected = document.getElementById(titleId);
    let screenSize = window.innerWidth;

    console.log("titre selectionne: " + titleSelected);
    console.log("taille d'ecran: " + screenSize);

    if (screenSize > breakPoint.medium_Max && screenSize <= breakPoint.large_Max){
      titleSelected.style.fontSize = "1.1em";
      return
      
    } 
    
    if (screenSize > breakPoint.large_Max && screenSize <= breakPoint.x_large_Max) {
      
      titleSelected.style.fontSize = "1.3em";
      return
      
    } 

    if (screenSize > breakPoint.x_large_Max) {
      
      titleSelected.style.fontSize = titleSize;
      return
      
    } 

    
  }

  useEffect(() => {
    titleGoodSize();

    window.addEventListener("resize", () => {
      titleGoodSize();
    });
    //lorsque que le composant est demonté on suprime l' ecouteur d'évènement
    return function () {
      window.removeEventListener("resize", () => {
        titleGoodSize();
      });
    };
  }, []);
  

  return (
    <div  className="title-n">
      {titleLevel === "h1" ? <h1 id={titleId} className={titleColor}>{titleText}</h1> : null}
      {titleLevel === "h2" ? <h2 id={titleId} className={titleColor}>{titleText}</h2> : null}
      {titleLevel === "h3" ? <h3 id={titleId} className={titleColor}>{titleText}</h3> : null}
      {titleLevel === "h4" ? <h4 id={titleId} className={titleColor}>{titleText}</h4> : null}
      {titleLevel === "h5" ? <h5 id={titleId} className={titleColor}>{titleText}</h5> : null}
      {titleLevel === "h6" ? <h6 id={titleId} className={titleColor}>{titleText}</h6> : null}
    </div>
  );
}

    export { TitleHN };
