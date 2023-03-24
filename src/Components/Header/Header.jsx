//Composant "Header"

//Import des hook
import { useState, useEffect } from "react";


//Import des fichiers des url des images de la banner
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";


//Import des composants enfants

import { NavMenu } from "../NavMenu/NavMenu.jsx";
import { NavCollapse } from "../NavCollapse/NavCollapse.jsx";
import { NavLink } from "../NavLink/NavLink.jsx";
import { Banner } from "../Banner/Banner.jsx";
import { TitleHN } from "../Title/TitleHN/TitleHN.jsx";
import { Title } from "../Title/Title.jsx";



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
      {isSmallScreen ? (
        <Banner
          pagename="home"
          text="Des astuces pour vos projets!"
          title={"Des travaux électriques...?"}
          color={"fifth"}
          urlimg={urlImgBanner.home.small}
        />
      ) : null}
      <nav className="header">
        {isSmallScreen ? null : (
          <img className="header__logo" src="" alt=""></img>
        )}
        <div className="header__container-menu">
          <NavMenu>
            <NavLink
              urlTo="/"
              urlImg=""
              text="Accueil"
              tailleText="1.2em"
              colorText="second"
              colorBg=""
            />
            <NavCollapse urlImg="" text="norme" colorText="second" sizePolice="1.2em" colorBg="">
              <NavLink
                urlTo="/ip"
                urlImg=""
                text="Indice de protection"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/classe"
                urlImg=""
                text="Classe des appareillages électriques"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/section-conducteur"
                urlImg=""
                text="Section des conducteurs"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
            </NavCollapse>
            <NavCollapse urlImg="" text="Schéma" colorText="second" sizePolice="1.2em" colorBg="">
              <NavLink
                urlTo="/schema/pc16a"
                urlImg=""
                text="Prise de courant 16A"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-specialise"
                urlImg=""
                text="Circuits spécialisés"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-eclairage"
                urlImg=""
                text="Circuit éclairage"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
            </NavCollapse>
            <NavCollapse urlImg="" text="Quiz" colorText="second" sizePolice="1.2em" colorBg="">
              <NavLink
                urlTo="/quiz/pc16a"
                urlImg=""
                text="Quiz - Prise de courant'"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/quiz/circuit-specialise"
                urlImg=""
                text="Quiz-circuits spécialisés"
                colorText="fourth"
                tailleText="1em"
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
