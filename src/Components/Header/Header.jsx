//Composant "Header"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des "hook"
import { useState, useContext } from "react";

//Import des context
import { ContextNav } from "../../Utils/context/Nav_context.jsx";

//Import des composants enfants
import { SousMenu } from "../Sous_menu/Sous__menu.jsx";
import { DoubleChevronMenu } from "../DoubleChevronMenu/DoubleChevronMenu.jsx";


//Import des breakPoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/header.css";
import { breakPoint } from "../../Utils/break_point/break_point.js";


//Fonction "Header"
function Header() {

    const { isClicked, setIsClicked } = useContext(ContextNav);

   

    console.log("isclickked vue du composant HEADER :" + isClicked);
    

    return (
      <header>
        <nav className="header">
          <Link className="header__menu__li__link" to="/">
            <img src="" alt=""></img>
          </Link>
          <ul className="header__menu">
            <li className="header__menu__li">
              <Link className="header__menu__li__link" to="/">
                Accueil
              </Link>
            </li>
            <li className="header__menu__li">
              <Link className="header__menu__li__link" to="/cours">
                Rappel des fondamentaux
              </Link>
            </li>
            <li
              className="header__menu__li schema-elec"
              onClick={() => {setIsClicked(!isClicked)}}
              onMouseLeave={() => { setIsClicked(false) }}
                        
            >
              
                <Link className="header__menu__li__link" >Schémas-électriques</Link>
                
                <DoubleChevronMenu isClick={isClicked} color="first-color" /> 
                
                <SousMenu hover={isClicked} />
                        
            </li>
            <li className="header__menu__li">
              <Link className="header__menu__li__link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export {Header}