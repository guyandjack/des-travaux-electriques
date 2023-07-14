//Composant "loader"

/****************************************
 * Le composant "loader" est un element qui apparait tant que le contenu de la page n' est pas totalement chargé
 * les props permetent de definir:
 *
 *****************************************/

//Import des hooks
import { useState, useEffect, useRef } from "react";

//Import du module Link
import { Link } from "react-router-dom";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/loader.css";

//fonction "Loader"

function Loader() {
  const whiteRing = useRef();
  const textLoading = useRef();
  const loaderElement = useRef();

  const [isLoading, setIsLoading] = useState(false);

 /* useEffect(() => {

    if(document.readyState !== "complete") {
      
      setIsLoading(true);
      window.addEventListener("load", () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
          
    }
   
  
  },[]);*/

  
    
    if (document.readyState !== "complete") {
        
      setIsLoading(true);
      window.addEventListener("load", () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      })
    }
  
  
  

  return isLoading? (
    <div ref={loaderElement} className="loader">
      <div className="loader__container anim-container-loader">
        <div className="loader-element color-first index-1 anim-top "></div>
        <div className="loader-element color-second index-2 anim-right"></div>
        <div className="loader-element color-third index-3 anim-bottom"></div>
        <div
          ref={whiteRing}
          className="loader-element color-fifth index-4 anim-left"
        ></div>
      </div>
      <div ref={textLoading} className="loader-element text">
        loading...
      </div>
    </div>
  ): null;
}

export { Loader }
