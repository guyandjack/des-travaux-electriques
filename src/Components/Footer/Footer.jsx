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
        <li className="footer__menu__li">
          <a href="/cgu#" className="footer__menu__li__link">CGU</a>
        </li>
        <li className="footer__menu__li">
          <a href="/cgu#1" className="footer__menu__li__link">Mentions Légales</a>
        </li>
        <li className="footer__menu__li">
          <a href="/cgu#6" className="footer__menu__li__link">Politique de confidencialitée</a>
        </li>
        <li className="footer__menu__li">
          <Link className="footer__menu__li__link" to="/">Webmaster: Guy&Jack Dev-Web</Link>
        </li>
      </ul>

    </footer>
  );
}

export { Footer };
