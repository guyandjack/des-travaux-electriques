//Composant "Header"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des "hook"
import { useState, useContext } from "react";

//Import des context
import { ContextNav } from "../../Utils/context/Nav_context.jsx";

//Import des composants enfants
import { SousMenu } from "../Sous_menu/Sous__menu.jsx";

//Import des breakPoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/header.css";
import { breakPoint } from "../../Utils/break_point/break_point.js";


//Fonction "Header"
function Header() {

    const { isClicked, setIsClicked } = useContext(ContextNav);

    let classChevron = "img-chevron";
    let addClassChevron = " rotate";

    console.log("isclickked vue du composant HEADER :" + isClicked);
    

    return (
      <header>
        <nav className="header">
          <Link to="/">
            <img src="" alt=""></img>
          </Link>
          <ul className="header__menu">
            <li>
              <Link className="header__menu-link" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="header__menu-link" to="/cours">
                Rappel des fondamentaux
              </Link>
            </li>
            <li
              className="schema-elec "
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              <div className="header__menu-div">
                <span className="header__menu-link ">Schémas-électriques</span>
                <svg
                  className={isClicked? classChevron + addClassChevron : classChevron}
                  //width="13"
                  //height="20"
                  viewBox="0 0 13 20"
                  //fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.51 1.87003L10.74 0.100025L0.83995 10L10.7399 19.9L12.5099 18.13L4.37995 10L12.51 1.87003V1.87003Z"
                    //fill=""
                  />
                </svg>
              </div>

              <SousMenu hover={isClicked} />
            </li>
            <li>
              <Link className="header__menu-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export {Header}