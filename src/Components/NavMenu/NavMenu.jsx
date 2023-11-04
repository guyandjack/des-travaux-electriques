//Composant "NavMenu"

//Import des hooks

import { useEffect, useState } from "react";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des composants enfants
import { CollapseUserSession } from "../CollapseUserSession/CollapseUserSession.jsx";

//Import des functions
import { isScreenMobil } from "../../Utils/Function/isScreenMobil.js";

//Import des feuilles de style
import "../../Style/CSS/nav-menu.css";

//Fonction "NavMenu"

function NavMenu({ children }) {
  //hook useState
  const [isSmallScreen, setIsSmallScreen] = useState();

  //hook useEffect

  //determine si l' ecran est de type mobile, et ajuste le "UseState" en fonction
  useEffect(() => {
    let isMobilDisplay = isScreenMobil();

    setIsSmallScreen(isMobilDisplay);

    window.addEventListener("resize", () => {
      let isMobilDisplays = isScreenMobil();

      setIsSmallScreen(isMobilDisplays);
    });

    return () => {
      window.removeEventListener("resize", () => {
        isScreenMobil(setIsSmallScreen);
      });
    };
  }, []);

  
  return (
    <ul className="nav-menu">
      {children.map((link, index) => {
        return (
          <li key={index + "nav-menu-li"} className="nav-menu__li">
            {link}
          </li>
        );
      })}
      {isSmallScreen ? <li>{<CollapseUserSession />}</li> : null}
    </ul>
  );
}

export { NavMenu };
