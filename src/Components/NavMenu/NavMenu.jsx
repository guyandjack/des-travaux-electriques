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

  useEffect(() => {
    let isMobilDisplay = isScreenMobil();
    console.log("valeur de retour de la fonction isMobil: " + isMobilDisplay);

    setIsSmallScreen(isMobilDisplay);
    console.log(
      " valeur de issamllscreen dans le use effect header: " + isSmallScreen
    );

    window.addEventListener("resize", () => {
      let isMobilDisplays = isScreenMobil();
      console.log(
        " valeur de issamllscreen dans l 'event avant setage: " + isSmallScreen
      );
      setIsSmallScreen(isMobilDisplays);
      console.log(" taille de l'écran dans le header: " + window.innerWidth);
      console.log(
        " valeur de issamllscreen dans l 'event apres setage: " + isSmallScreen
      );
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
