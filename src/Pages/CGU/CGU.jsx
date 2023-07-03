//Page "Condition Generale D'utilisation"

//Import du contenu des "CGU"
import { CGUContent } from "../../Data/CGU_content/CGU_content.jsx";

//Import des hooks
import { useEffect } from "react";

//Import des fonctions
import { linkRef } from "../../Utils/Function/linkRef.js";

//Import des composants enfants
import { Loader } from "../../Components/Loader/Loader.jsx";

//Import des feuilles de style
import "../../Style/CSS/cgu.css";

//Fonction "CGU"
function PageCGU() {

  
  //Permet le scroll sur le bon article
  useEffect(() => {
    linkRef();
  }, [])

  //Variable de class de style
  let classBgLi = "cgu__list__li"
  let classBgColor = " bg-dark";

  return (
    <div className="cgu">
      <Loader />
      <h1 className="cgu__title">Conditions générales d'Utilisation</h1>
      <ul className="cgu__list">
        {CGUContent.map((document, index) => {
          return(
          <li key={index} id={index} className={((index + 1)%2===0)?(classBgLi + classBgColor ):(classBgLi)} >
            
            
            <div className="article-number">Article{" " + (index + 1) + " :"}<div className="article-title">{" " + document.title}</div></div>
            <div className="article-content">{document.content}</div>
            
              

          </li>
          )
        })}
      </ul>
    </div>
  );
}

export { PageCGU };
