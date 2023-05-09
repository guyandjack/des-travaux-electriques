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
          <Link to="/cgu/1" className="footer__menu__li__link">
            CGU
          </Link>
        </li>
        <li className="footer__menu__li">
          <Link to="/cgu/2" className="footer__menu__li__link">
            Mentions légales
          </Link>
        </li>
        <li className="footer__menu__li">
          <Link to="/cgu/9" className="footer__menu__li__link">
            Politique de confidentialité
          </Link>
        </li>
        <li className="footer__menu__li">
          <a
            className="footer__menu__li__link"
            href="https:www.github.com/guyandjack?tab=repositories"
          >
            Webmaster: Guy&Jack Dev-Web
          </a>
        </li>
      </ul>
    </footer>
  );
}

export { Footer };
