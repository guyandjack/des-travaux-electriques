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

function ButtonLink({ url, text, urlImg }) {

  const { setIsClicked } = useContext(ContextNav);
   
    return (
      <Link className="button-link" to={url} onClick={() => { setIsClicked(false) }}>
        
        <img className="button-link__img" src={urlImg} alt=""></img>
        <p className="button-link__text">{text}</p>

      </Link>
    );
}

export {ButtonLink}
