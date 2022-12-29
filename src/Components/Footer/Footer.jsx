//Composant "Footer"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/footer.css";

//Fonction "Footer"
function Footer() {
  return (
    <footer className="footer">
      
      <ul className="footer__menu">
        <li className="footer__menu__li"><Link className="footer__menu__li__link" to="/cgu" >Mentions Legales</Link></li>
        <li className="footer__menu__li"><Link className="footer__menu__li__link" to="" >Politique de confidencialitée</Link></li>
        <li className="footer__menu__li"><Link className="footer__menu__li__link" to="" >Webmaster: GuyandJack dev web</Link></li>
      </ul>

    </footer>
  );
}

export { Footer };
