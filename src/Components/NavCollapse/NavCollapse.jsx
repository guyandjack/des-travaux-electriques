//Composant "NavCollapse"

/****************************************
 * Le composant "NavCollapse" est un div collapse qui affiche un sous menu contenant des liens de navigation (NavLink)
 * les props permetent de definir:
 * le contenu du sous menu
 *****************************************/

//Import du module Link
import { Link } from "react";

//Import descomposants enfants
import { NavLink } from "../NavLink/NavLink.jsx";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/nav_collapse.css";

//Fonction "NavCollapse"

function NavCollapse({ children }) {
  return (
    <div className="nav-collapse">
      <div className="nav-collapse-title">
        <NavLink urlTo="" urlImg="" text="" colorText="" colorBg="" />
        <span className="nav-collapse-chevron"> ▼ </span>
      </div>
      {children ? (
        <ul className="collapse-list">
          {children.map((link, index) => {
            return (
              <li key={index} className="collapse-list__li">
                {link}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export { NavCollapse };
