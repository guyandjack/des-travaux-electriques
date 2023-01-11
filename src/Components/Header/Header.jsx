//Composant "Header"


//Import des "hook"
import { useState, useContext } from "react";

//Import des context
import { ContextNav } from "../../Utils/context/Nav_context.jsx";

//Import des composants enfants
import { Menu } from "../Menu/Menu.jsx";
import { MenuBurger } from "../Menu_Burger/Menu_Burger.jsx";


//Import des breakPoints
import {breakPoint } from "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/header.css";



//Fonction "Header"
function Header() {

  
  
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);  
  
  let menu;
  
  if (widthScreen > breakPoint.small_Max) {
    menu = true;
  }

  if (widthScreen <= breakPoint.small_Min) {
    menu = false;
  }
  
  window.addEventListener("resize", () => { setWidthScreen(window.innerWidth) });
  
  

    return (
      <header>
        <nav className="header">
          <img className="header__logo" src="" alt=""></img>
          {menu ?
            <Menu /> :
            <MenuBurger />
          }
        
        </nav>
      </header>
    );
}

export { Header }