import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/pc16a">Schema prise de courant</Link>
            
        </div>
    )
}

export {Header}