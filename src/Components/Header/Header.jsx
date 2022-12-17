//Composant "Header"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/header.css";


//Fonction "Header"
function Header() {
    return (
        <div>
            <header className="header">
                <nav>
                    <ul className="header-menu">
                        <li><Link to="/"><img src="" alt=""></img></Link></li>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/">Rappel des fondamantaux</Link></li>
                        <li>Schemas-électriques
                            
                            <ul className="header-sous-menu">
                                
                                <li>Prise de courant</li>
                                <li>Circuits specialisés</li>
                                <li>Circuits éclairage</li>
                                <li>Tableau de répartition</li>
                                <li>Tableau de communication</li>
                                <li>Dispositifs Differentiel Residuel (DDR)</li>
                                <li>Disjoncteur de branchement</li>
                                <li>Disjoncteur bipolaire</li>

                            </ul>
                        </li>
                        <li>Contact</li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}

export {Header}