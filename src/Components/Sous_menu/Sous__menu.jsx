//Composant "SousMenu"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/sous-menu.css";

//Fonction "SousMenu"

function SousMenu({ hover }) {
    
    
    let classDefault = "header-sous-menu";
    let classAdd = (hover === true)? (" display") : (" hide");
    
    return (
        
        <ul className={classDefault + classAdd}>
                            
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/pc16a" >Prise de courant</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/circuit-specialise" >Circuits specialisés</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/circuit-eclairage" >Circuits éclairage</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/tgbt" >Tableau de répartition</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="tc" >Tableau de communication</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/ddr" >Dispositifs Differentiel Residuel (DDR)</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="/db" >Disjoncteur de branchement</Link></li>
            <li className="sous-menu-li"><Link className="sous-menu-link" to="" >Disjoncteur bipolaire</Link></li>

        </ul> 
    )
}

export {SousMenu}
