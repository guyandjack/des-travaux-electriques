//Composant "NavLink"

/****************************************
 * Le composant NavLink est un lien de navigation entre les pages du site
 * les props permetent de definir:
 * l' url du lien
 * l' url de l' image qui lui est associé
 * le contenu textuel
 * la couleur du text
 * la taille du text
 * la couleur de fond
 *****************************************/

//Import des hooks
import { useState, useEffect } from "react";

//Import du module Link
import { Link } from "react-router-dom";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/nav_link.css";

//Fonction "NavLink"

function NavLink({ urlTo, urlImg, text, colorText, tailleText, colorBg }) {


    let classColorText = "";
    let classColorBg = "";
    let classText = "nav-link-text";
    let contentAlt = "lien vers ";

  // détermination de la couleur du text
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

  // determination de la couleur de fond
  switch (colorBg) {
    case "first": {
      classColorBg = " first-bg";
      break;
    }

    case "second": {
      classColorBg = " second-bg";

      break;
    }
    case "third": {
      classColorBg = " third-bg";

      break;
    }
    case "fourth": {
      classColorBg = " fourth-bg";

      break;
    }
    case "fifth": {
      classColorBg = " fifth-bg";

      break;
    }
    default: {
      classColorBg = "";
    }
  }
  return (
    <div className="nav-link">
      {urlImg ? (
        <Link to={urlTo}>
          <div className="container-link">
            <img
              className="nav-link-img"
              src={urlImg}
              alt={contentAlt + text}
            ></img>
            <p style={{fontSize:tailleText}} className={classText + classColorText + classColorBg}>{text}</p>
          </div>
        </Link>
      ) : (
        <Link to={urlTo}>
          <p style={{fontSize:tailleText}}  className={classText + classColorText + classColorBg}>{text}</p>
        </Link>
      )}
    </div>
  );
}

export { NavLink };
