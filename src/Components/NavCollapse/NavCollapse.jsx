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

//Fonction "NavCollapse"

function NavCollapse({ urlTo, urlImg, text, colorText, colorBg, children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    getScreenSize();
  }, [isSmallScreen]);

  let classList = "collapse-list";
  let classListHide = "display";
  let classColorText = "";
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

  function getScreenSize() {
    screenSize = window.innerWidth;
    if (screenSize < 579) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }

    
  }

  window.addEventListener("resize", () => {
    getScreenSize();
  });

  return (
    <div
      className="nav-collapse"
      onClick={(e) => {
        activeCollapseByClick(e.currentTarget);
      }}
      onMouseLeave={!isSmallScreen? ((e) => {
          closeCollapse(e.currentTarget);
      }) : null}
    >
      <div className="nav-collapse-title">
        <NavLink
          urlTo={urlTo}
          urlImg={urlImg}
          text={text}
          colorText={colorText}
          colorBg={colorBg}
        />
        <span className={classChevron + classColorText}> ▼ </span>
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
