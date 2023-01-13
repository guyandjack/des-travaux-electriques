//Composant "SousMenuBurger"

//Composant "SousMenu"

//Import des hook
import { useState, useEffect } from "react";

//Import de la liste des liens
import { ListLinksSousMenu } from "../../Data/List_links_sous_menu/List_links_sous_menu.jsx";

//Import des composants enfants
import { ButtonLink } from "../Button_Link/Button_Link.jsx";

//Import des feuilles de style
import "../../Style/CSS/sous_menu_burger.css";

//Fonction "SousMenuBurger"

function SousMenuBurger({ click }) {
  let classSousMenu = "sous-menu-burger";
  let classAdd;
  let refId = "sousmenu";
  let classLien = "button-link-sous-menu-burger";

  if (click === true) {
    classAdd = " display-sous-menu-burger";
  }

  if (click === false) {
    classAdd = " hide-sous-menu-burger";
  }

  return (
    <ul className={classSousMenu + classAdd}>
      {ListLinksSousMenu.map((element, index) => {
        return (
          <li key={index} id={refId + index} className="sous-menu-burger__li">
            <ButtonLink
              classLink={classLien}
              text={element.text}
              url={element.url}
            />
          </li>
        );
      })}
    </ul>
  );
}



export { SousMenuBurger };
