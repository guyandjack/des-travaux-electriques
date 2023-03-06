//Composant "Header"



//Import des composants enfants

import { NavMenu } from "../NavMenu/NavMenu.jsx";
import { NavCollapse } from "../NavCollapse/NavCollapse.jsx";
import { NavLink } from "../NavLink/NavLink.jsx";


//Import des feuilles de style
import "../../Style/CSS/header.css";

//Fonction "Header"
function Header() {
  

  return (
    <header>
      <nav className="header">
        <img className="header__logo" src="" alt=""></img>
        <div className="header__container-menu">
          <NavMenu>
            <NavLink
              urlTo="/"
              urlImg=""
              text="Accueil"
              colorText="second"
              colorBg=""
            />
            <NavCollapse urlImg="" text="norme" colorText="second" colorBg="">
              <NavLink
                urlTo="/ip"
                urlImg=""
                text="Indice de protection"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/classe"
                urlImg=""
                text="Classe des appareillages électriques"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/section-conducteur"
                urlImg=""
                text="Section des conducteurs"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                colorBg=""
              />
            </NavCollapse>
            <NavCollapse urlImg="" text="Schéma" colorText="second" colorBg="">
              <NavLink
                urlTo="/pc16a"
                urlImg=""
                text="Prise de courant 16A"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/circuit-specialise"
                urlImg=""
                text="Circuits spécialisés"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/circuit-eclairage"
                urlImg=""
                text="Circuit éclairage"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                colorBg=""
              />
            </NavCollapse>
            <NavCollapse urlImg="" text="Quiz" colorText="second" colorBg="">
              <NavLink
                urlTo="/quiz-pc16a"
                urlImg=""
                text="Quiz-Prise de courant"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/quiz-circuit-spécialisé"
                urlImg=""
                text="Quiz-circuits spécialisés"
                colorText="fourth"
                colorBg=""
              />
            </NavCollapse>
            <NavLink
              urlTo="/contact"
              urlImg=""
              text="Contact"
              colorText="second"
              colorBg=""
            />
          </NavMenu>
        </div>
      </nav>
    </header>
  );
}

export { Header };
