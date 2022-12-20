//Composant "Footer"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style

//Fonction "Footer"
function Footer() {
  return (
    <footer className="footer">
      
      <ul className="footer-menu">
        <li className="footer-menu__li"><Link to="" >Mentions Legales</Link></li>
        <li className="footer-menu__li"><Link to="" ></Link>Webmaster: GuyandJack dev web</li>
        <li className="footer-menu__li"><Link to="" ></Link></li>
      </ul>

    </footer>
  );
}

export { Footer };
