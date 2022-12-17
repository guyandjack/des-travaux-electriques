import { Link } from "react-router-dom";

import "../../Style/CSS/header.css"

function Header() {
    return (
        <div className="header">
            
            <Link to="/">Accueil</Link>
            <Link to="/pc16a">Schema prise de courant</Link>
            
        </div>
    )
}

export {Header}