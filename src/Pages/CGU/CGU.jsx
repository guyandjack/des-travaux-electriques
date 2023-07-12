//Page "Condition Generale D'utilisation"

//Import du contenu des "CGU"
import { CGUContent } from "../../Data/CGU_content/CGU_content.jsx";

//Import des hooks
import { useEffect, useState } from "react";

//Import des breakpoints
import { breakPoint } from "../../Utils/break_point/break_point.js";

//Import des fonctions
import { linkRef } from "../../Utils/Function/linkRef.js";


//Import des composants enfants
import { Loader } from "../../Components/Loader/Loader.jsx";
import { MenuFlotant } from "../../Components/MenuFlotant/MenuFlotant.jsx";

//Import des feuilles de style
import "../../Style/CSS/cgu.css";

//Fonction "CGU"
function PageCGU() {

  //State
  const [displayMenu, setDisplayMenu] = useState(false);

  //Permet le scroll sur le bon article
  useEffect(() => {
    linkRef();
  }, []);

  //Recupere la taille de l' ecran et modifie le state pour afficher le menu flotant
  useEffect(() => {

    window.addEventListener("resize", () => {
      let sizeScreen = window.innerWidth;

      if (sizeScreen <= breakPoint.x_large_Min) {
        
        setDisplayMenu(false);
      }
      else {
        setDisplayMenu(true);
        
      }
    });

    let sizeScreen = window.innerWidth;

    if (sizeScreen >= breakPoint.x_large_Min) {
      setDisplayMenu(true);
    }


  }, []);

  //Variable de class de style
  let classBgLi = "cgu__list__li";
  let classBgColor = " bg-dark";

  return (
    <div className="cgu">
      <Loader />
      {displayMenu? <MenuFlotant /> : null}
      <h1 className="cgu__title">Conditions générales d'Utilisation</h1>
      <ul className="cgu__list">
        {CGUContent.map((document, index) => {
          return (
            <li
              key={index}
              id={index}
              className={
                (index + 1) % 2 === 0 ? classBgLi + classBgColor : classBgLi
              }
            >
              <div className="article-number">
                Article{" " + (index + 1) + " :"}
                <div className="article-title">{" " + document.title}</div>
              </div>
              <div className="article-content">{document.content}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { PageCGU };
