//Composant "MenuFlotant"

/****
 * le menu flotant permet de scroller la page à partir de la liste de lien
 */



//Import des hooks
import { useEffect } from "react";

//I

//Import des fonctions
import { ScrollTo } from "../../Utils/Function/scrollTo.js";

//Import des feuilles de style
import "../../Style/CSS/menu_flotant.css";

//Fonction "MenuFlotant"


function MenuFlotant{
    return (
        <div className="cont-menu-flotant">
            <ul className="menu-flotant">
                <li className="menu-flotant__li"></li>
                
            </ul>
        </div>
    )
};

export {MenuFlotant}