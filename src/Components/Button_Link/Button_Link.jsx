//Composant "ButtonLink"

//Import des "hooks"
import { useContext } from "react";

//Import des "context"
import { ContextNav } from "../../Utils/context/Nav_context.jsx";


//Import du module "Link"
import { Link } from "react-router-dom";


//Import des feuilles de style
import "../../Style/CSS/button-link.css";


//Fonction "ButtonLink"

function ButtonLink({ url, text, urlImg, classLink }) {

  const { setIsClicked } = useContext(ContextNav);

  let classLinkImg = "__img";
  let classLinkText = "__text";
   
    return (
      <Link
        className={classLink}
        to={url}
        
      >
        <img className={classLink + classLinkImg} src={urlImg} alt=""></img>
        <p className={classLink + classLinkText}>{text}</p>

      </Link>
    );
}

export {ButtonLink}
