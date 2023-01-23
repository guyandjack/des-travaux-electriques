//Composant "MenuBurger"

//Import des "hook"
import { useState, useContext, useEffect } from "react";

//Import des context
//import { ContextNav } from "../../Utils/context/Nav_context.jsx";

//Import des informations pour les "buttonLink"
import { listLinksMenu } from "../../Data/List_links_menu/List_links_menu.jsx";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des composants enfants
import { DoubleChevronMenu } from "../DoubleChevronMenu/DoubleChevronMenu.jsx";
import { ButtonLink } from "../Button_Link/Button_Link.jsx";
import { SousMenuBurger } from "../Sous_menu_burger/Sous_menu_burger.jsx";

//Import des feuilles de style
import "../../Style/CSS/menu_burger.css";

//Fonction "Menu"

function MenuBurger({ click }) {
  const [schemaClicked, setSchemaClicked] = useState(false);

  let menuBurger = "menu-burger";
  let menuBurgerLi = "__li";
  let classAddMenuBurger = "";

  let refId = "link";
  let classLien = "button-link-menu-burger";

  if (click) {
    classAddMenuBurger = " display-menu-burger";
  } else {
    classAddMenuBurger = " hide-menu-burger";
  }

  return (
    <ul className={menuBurger + classAddMenuBurger}>
      {listLinksMenu.map((element, index) => {
        return element.url !== null ? (
          <li
            key={index}
            id={refId + index}
            className={menuBurger + menuBurgerLi}
          >
            <ButtonLink
              classLink={classLien}
              url={element.url}
              text={element.text}
            />
          </li>
        ) : (
          
            <li
              key={index}
              id={refId + index}
              className={menuBurger + menuBurgerLi}
              onClick={() => {
                setSchemaClicked(!schemaClicked);
              }}
            >
              <div className="schema">
                <ButtonLink classLink={classLien} text={element.text} />
                <DoubleChevronMenu isClick={schemaClicked} color="fifth-color" />
              </div>
                <SousMenuBurger click={schemaClicked} />
            </li>
          
        );
      })}
    </ul>
  );
}

export { MenuBurger };
