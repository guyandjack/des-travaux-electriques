//Composant "NavLink"

/****************************************
 * Le composant NavLink est un lien de navigation entre les pages du site
 * les props permetent de definir:
 * l' url du lien
 * l' url de l' image qui lui est associé
 * le contenu textuel
 * la couleur du text
 * la couleur de fond
 *****************************************/

//Import du module Link
import { Link } from "react";

//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des feuilles de style
import "../../Style/CSS/nav_link.css";

//Fonction "NavLink"

function NavLink({ urlTo, urlImg, text, colorText, colorBg }) {
  let classColorText = "";
  let classColorBg = "";
  let contentAlt = "lien vers ";

  // determination de la couleur du text
  switch (colorText) {
    case "first": {
      classColorText = "first-color";
      break;
    }

    case "second": {
      classColorText = "second-color";

      break;
    }
    case "third": {
      classColorText = "third-color";

      break;
    }
    case "fourth": {
      classColorText = "fourth-color";

      break;
    }
    case "fifth": {
      classColorText = "fifth-color";

      break;
    }
    default: {
      classColorText = "first-color";
    }
  }

  // determination de la couleur de fond
  switch (colorBg) {
    case "first": {
      classColorBg = " first-color";
      break;
    }

    case "second": {
      classColorBg = " second-color";

      break;
    }
    case "third": {
      classColorBg = " third-color";

      break;
    }
    case "fourth": {
      classColorBg = " fourth-color";

      break;
    }
    case "fifth": {
      classColorBg = " fifth-color";

      break;
    }
    default: {
      classColorBg = " first-color";
    }
  }
  return (
    <div className="nav-link">
      {urlImg ? (
        <Link to={urlTo}>
          <img
            className="nav-link-img"
            src={urlImg}
            alt={contentAlt + text}
          ></img>
        </Link>
      ) : null}
      <Link to={urlTo}>
        <p className={classColorText + classColorBg}>{text}</p>
      </Link>
    </div>
  );
}

export { NavLink };
