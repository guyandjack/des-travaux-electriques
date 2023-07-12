//Composant "MenuFlotant"

/****
 * le menu flotant permet de scroller la page à partir de la liste de lien
 */

//Import des hooks
import { useEffect } from "react";

//Import de la liste des liens
import { linkFloatCgu } from "../../Data/List_lien_menu_flotant/List_lien_menu_flotant_cgu.js";

//Import des fonctions
import { scrollTo, ScrollTo } from "../../Utils/Function/scrollTo.js";

//Import des feuilles de style
import "../../Style/CSS/menu_flotant.css";

//Fonction "MenuFlotant"

function MenuFlotant() {
  return (
    <div className="menu-flotant">
      <ul className="menu">
        {linkFloatCgu.map((lien, index) => {
          return (
            <li
              key={index}
              id={"art-" + index}
              className="menu__li"
              onClick={(e) => {
                let targetElementIdValue = e.target.getAttribute("id");
                let idClean = targetElementIdValue.split("-")[1];
                scrollTo(`[id='${idClean}']`);
              }}
            >
              {lien}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export { MenuFlotant };
