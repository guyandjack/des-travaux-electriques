//Composant "Header"

//Import des hook
import { useState, useEffect } from "react";


//Import des composants enfants

import { NavMenu } from "../NavMenu/NavMenu.jsx";
import { NavCollapse } from "../NavCollapse/NavCollapse.jsx";
import { NavLink } from "../NavLink/NavLink.jsx";
import { Banner } from "../Banner/Banner.jsx";



//Import des feuilles de style
import "../../Style/CSS/header.css";

//Fonction "Header"
function Header() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() => {
    getScreenSize();
    
    
  }, [isSmallScreen]);


  function getScreenSize() {
    let screenSize = window.innerWidth;
    
    if (screenSize < 579) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }

     window.addEventListener("resize", () => {
    getScreenSize();
  });

  return (
    <header>
      {isSmallScreen ? <Banner
        title={"Travaux elec"}
        text={""}
        textcolor={"first"}
        imgUrl={""}

        /> : null}
      <nav className="header">
        {isSmallScreen? null : <img className="header__logo" src="" alt=""></img> }
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
                urlTo="/schema/pc16a"
                urlImg=""
                text="Prise de courant 16A"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-specialise"
                urlImg=""
                text="Circuits spécialisés"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-eclairage"
                urlImg=""
                text="Circuit éclairage"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                colorBg=""
              />
            </NavCollapse>
            <NavCollapse urlImg="" text="Quiz" colorText="second" colorBg="">
              <NavLink
                urlTo="/quiz/pc16a"
                urlImg=""
                text="Quiz-Prise de courant"
                colorText="fourth"
                colorBg=""
              />
              <NavLink
                urlTo="/quiz/circuit-specialise"
                urlImg=""
                text="Quiz-circuits spécialisés"
                colorText="fourth"
                colorBg=""
              />
            </NavCollapse>
            
          </NavMenu>
        </div>
      </nav>
    </header>
  );
}

export { Header };
