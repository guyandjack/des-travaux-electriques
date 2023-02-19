//Composant "SousMenu"

//Import des hook
import { useState, useEffect } from "react";

//Import de la liste des liens
import {
  ListLinksSousMenuSchema,
  ListLinksSousMenuQuiz,
  ListLinksSousMenuTheorie,
} from "../../Data/List_links_sous_menu/List_links_sous_menu.jsx";

//Import des composants enfants
import { ButtonLink } from "../Button_Link/Button_Link.jsx";

//Import des feuilles de style
import "../../Style/CSS/sous-menu.css";

//Fonction "SousMenu"

function SousMenu({ click, type }) {

  let sousMenu; 
  if (type !== null) {
    
    if (type === "schema") {
      sousMenu = ListLinksSousMenuSchema;
    }
    else if (type === "quiz") {
      sousMenu = ListLinksSousMenuQuiz;
    }
    else if (type === "theorie") {
      sousMenu = ListLinksSousMenuTheorie;
    }
  }
   
      
  let classSousMenu = "sous-menu";
  let classAdd;
  let refId = "sousmenu";
  let classLien = "button-link-sous-menu";
    

  if (click === true) {
    classAdd = " display-sous-menu";
  }

  if (click === false) {
    classAdd = " hide-sous-menu";
  }

  return (
      
    <ul className={classSousMenu + classAdd}>
      
        {sousMenu.map((element, index) => {

            return (
                    
              <li key={index} id={refId + index} className="sous-menu__li" >
                <ButtonLink
                  classLink={classLien}
                  text={element.text}
                  url={element.url}
                />
              </li>
            )
              
          }
        )}
      
    </ul>
  )
}
  

export {SousMenu}