//Composant "Header"

//Import des hook
import { useState, useEffect } from "react";




//Import des fichiers des url des images de la banner
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";


//Import des composants enfants

import { Link } from "react-router-dom";

import { SiteIsBuilding } from "../../Components/SiteIsBuilding/SiteIsBuilding.jsx";

import { NavMenu } from "../NavMenu/NavMenu.jsx";
import { NavCollapse } from "../NavCollapse/NavCollapse.jsx";
import { NavLink } from "../NavLink/NavLink.jsx";
import { Banner } from "../Banner/Banner.jsx";
import { CollapseUserSession } from "../CollapseUserSession/CollapseUserSession.jsx";

//Import des feuilles de style
import "../../Style/CSS/header.css";

//import des fonction
import {  pageAperture, pageClosure } from "../../Utils/Function/LocalStorage.js";


//Fonction "Header"
function Header() {
  //hooks

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  

  //Variables

  // Variable pour limiter les re-render45
  let isFirstTime = true;

  useEffect(() => {
    getScreenSize();
  }, [isSmallScreen]);

  //Gere les sessions utilisteurs
  useEffect(() => {
   
    if (isFirstTime == true) {
      
      //reference la page consultée dans le local storage
      pageAperture();
  
      //Suite à un évenement fermeture de page on gère la session utilisateur
      window.addEventListener("beforeunload", () => {
        //reinitialisation de la variable
        isFirstTime = true;
        pageClosure();
      
      })
      //Evite un deuxieme traitement lors du re-render
      isFirstTime = false;
    }
  }, []);
    
 

  //Declaration des fonctions

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
    <header className="main-header">
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
        <div className="header__container-div-sitebuilding">
          <SiteIsBuilding />
        </div>
        
        <div className="header__container-logo">
          
          <a href="/">
            <img
              className="header-logo"
              src="/Asset/logo/logo-electravaux-v2.svg"
              alt="logo"
              ></img>
          </a>

        </div>
        
        <div className="header__container-menu">
          <NavMenu>
            <NavLink
              urlTo="/"
              urlImg=""
              text="accueil"
              tailleText="1.2em"
              colorText="second"
              colorBg=""
            />
            {/*<NavCollapse
              urlImg=""
              text="norme"
              colorText="second"
              sizePolice="1.2em"
              colorBg=""
            >
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
            </NavCollapse>*/}
            <NavCollapse
              urlImg=""
              text="Schémas"
              colorText="second"
              sizePolice="1.2em"
              colorBg=""
            >
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
              {
                <NavLink
                  urlTo="/schema/circuit-eclairage"
                  urlImg=""
                  text="Circuit éclairage"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                /*<NavLink
                urlTo="/schema/protection-des-personnes"
                urlImg=""
                text="Protection des personnes"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />*/
              }
            </NavCollapse>
            <NavCollapse
              urlImg=""
              text="Quiz"
              colorText="second"
              sizePolice="1.2em"
              colorBg=""
            >
              <NavLink
                urlTo="/schema/pc16a/quiz"
                urlImg=""
                text="Quiz - «Prise de courant»"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-specialise/quiz"
                urlImg=""
                text="Quiz - «circuits spécialisés»"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
              <NavLink
                urlTo="/schema/circuit-eclairage/quiz"
                urlImg=""
                text="Quiz - «circuits éclairages»"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
            </NavCollapse>
          </NavMenu>
        </div>
        {!isSmallScreen ? (
          <div className="header__container-div-session">
            <CollapseUserSession />
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export { Header };
