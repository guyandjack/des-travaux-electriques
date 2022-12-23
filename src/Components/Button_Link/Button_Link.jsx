//Composant "ButtonLink"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/button-link.css";

//Fonction "ButtonLink"

function ButtonLink({ url, text }) {
    
    return (

        <Link className="button-link" to={url}>{text}</Link>

    )
}

export {ButtonLink}
