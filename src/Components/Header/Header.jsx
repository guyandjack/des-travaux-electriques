//Composant "Header"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des "hook"
import { useState, useEffect } from "react";

//Import des composants enfants
import { SousMenu } from "../Sous_menu/Sous__menu.jsx";

//Import des feuilles de style
import "../../Style/CSS/header.css";


//Fonction "Header"
function Header() {

    const [mouseover, setMouseover] = useState(null);

    useEffect(() => {
        let menuItem = document.querySelector(".schema-elec");
        menuItem.addEventListener("mouseover", function () {setMouseover(true) });
        menuItem.addEventListener("mouseout", function () { setMouseover(false) });
        
    },[mouseover]);

    

    return (
        
        <header>
            <nav className="header">
                <Link to="/"><img src="" alt=""></img></Link>
                <ul className="header__menu">
                    
                    <li><Link className="header__menu-link" to="/">Accueil</Link></li>
                    <li><Link className="header__menu-link" to="/">Rappel des fondamentaux</Link></li>
                    <li className="header__menu-link schema-elec ">Schémas-électriques
                        
                        <SousMenu hover={mouseover} />

                    </li>
                    <li><Link className="header__menu-link" to="/contact">Contact</Link></li>

                </ul>
            </nav>
        </header>
        
    )
}

export {Header}