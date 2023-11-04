//Composant "NavCollapse"

/****************************************
 * Le composant "NavCollapse" est un div collapse qui affiche un sous menu contenant des liens de navigation (NavLink)
 * les props permetent de definir:
 * le contenu du sous menu
 *****************************************/
//Import des hook
import { useState, useEffect } from "react";

//Import du module Link
import { Link } from "react";

//Import descomposants enfants
import { NavLink } from "../NavLink/NavLink.jsx";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/nav_collapse.css";

//Import des fonctions
import { isScreenMobil } from "../../Utils/Function/isScreenMobil.js";

//Fonction "NavCollapse"

function NavCollapse({ urlTo, urlImg, text, colorText, sizePolice, colorBg, children }) {
  const [isSmallScreen, setIsSmallScreen] = useState();

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

  let classList = "collapse-list";
  let classListHide = "display";
  let classColorText = "";
  let sizeText = 1;
  let classChevron = "nav-collapse-chevron";
  let classChevronAnimation = "chevron-animation";
  let screenSize;

  // determination de la couleur du chevron
  switch (colorText) {
    case "first": {
      classColorText = " first-text";
      break;
    }

    case "second": {
      classColorText = " second-text";

      break;
    }
    case "third": {
      classColorText = " third-text";

      break;
    }
    case "fourth": {
      classColorText = " fourth-text";

      break;
    }
    case "fifth": {
      classColorText = " fifth-text";

      break;
    }
    default: {
      classColorText = "";
    }
  }

  function activeCollapseByClick(evt) {
    let list = evt.lastChild;
    list.classList.toggle(classListHide);
    let chevron = evt.querySelector("span.nav-collapse-chevron");
    chevron.classList.toggle(classChevronAnimation);
  }

  function closeCollapse(evt) {
    let list = evt.lastChild;
    list.classList.remove(classListHide);
    let chevron = evt.querySelector("span.nav-collapse-chevron");
    chevron.classList.remove(classChevronAnimation);
  }

  

  

  return (
    <div
      className="nav-collapse"
      onClick={(e) => {
        activeCollapseByClick(e.currentTarget);
      }}
      onMouseLeave={
        !isSmallScreen
          ? (e) => {
              closeCollapse(e.currentTarget);
            }
          : null
      }
    >
      <div className="nav-collapse-title">
        <div className="container-navlink">
          <NavLink
            urlTo={urlTo}
            urlImg={urlImg}
            text={text}
            colorText={colorText}
            tailleText={sizePolice}
            colorBg={colorBg}
          />
        </div>
        <div className="container-chevron">
          <span className={classChevron + classColorText}> ▼ </span>
        </div>
      </div>
      {children ? (
        <ul className={classList}>
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
