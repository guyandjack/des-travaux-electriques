//Composant "Menu"

//Import des "hook"
import { useState, useContext, useEffect } from "react";

//Import des context
//import { ContextNav } from "../../Utils/context/Nav_context.jsx";

//Import des informations pour les "buttonLink"
import { listLinksMenu } from "../../Data/List_links_menu/List_links_menu.jsx";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des composants enfants
import { ChevronMenu } from "../ChevronMenu/ChevronMenu.jsx";
import { ButtonLink } from "../Button_Link/Button_Link.jsx";
import { SousMenu } from "../Sous_menu/Sous_menu.jsx";

//Import des feuilles de style
import "../../Style/CSS/menu.css";

//Fonction "Menu"

function Menu() {
  const [isClicked, setIsClicked] = useState(false);

  let refId = "link";
  let classLien = "button-link-menu";
  let urlNull = "";

  return (
    <ul className="menu">
      {listLinksMenu.map((element, index) => {
        return element.url !== null ? (
          <li key={index} id={refId + index} className="menu__li">
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
            className="menu__li"
            onMouseLeave={() => {
              setIsClicked(false);
            }}
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <div
              className="schema"
              /*onClick={() => {
                setIsClicked(!isClicked);
              }}*/
            >
            <ButtonLink classLink={classLien} text={element.text} />
            </div>
            <ChevronMenu isClick={isClicked} color="second" />
            <SousMenu click={isClicked} />
          </li>
        );
      })}
    </ul>
  );
}

export { Menu };
