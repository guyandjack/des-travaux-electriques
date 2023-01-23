
//Page "erreur-404"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/error_404.css";


//Fonction "PageErreur"
function PageErreur() {
    return (
    <div className="error">
            
        <p className="error__404">Oups...page introuvable <br className="error__404__split"></br>...Erreur 404</p>
        <Link className="error__link" to="/">Retour sur la page accueil</Link>
        
    </div>
    );
}

export { PageErreur}