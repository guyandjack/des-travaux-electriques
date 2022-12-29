//Composant "ButtonLink"

//Import du module "Link"
import { Link } from "react-router-dom";


//Import des feuilles de style
import "../../Style/CSS/button-link.css";

//Fonction "ButtonLink"

function ButtonLink({ url, text, urlImg }) {
    
    return (
      <Link className="button-link" to={url}>
        <img className="button-link__img" src={urlImg} alt=""></img>
        <p className="button-link__text">{text}</p>
      </Link>
    );
}

export {ButtonLink}
