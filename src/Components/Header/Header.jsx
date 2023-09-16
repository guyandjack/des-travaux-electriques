//Composant "Header"

//Import des hook
import { useState, useEffect, useRef } from "react";

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
import {
  pageAperture,
  pageClosure,
} from "../../Utils/Function/LocalStorage.js";

//Fonction "Header"
function Header() {

  
  // Variable pour limiter les re-render "session user"
  let isFirstTime = true;

  //hooks State

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  //hook useEffect

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
      });
      //Evite un deuxieme traitement lors du re-render
      isFirstTime = false;
    }
  }, []);

  //Gere les écouteurs d'évènment scroll et scrollend
  useEffect(() => {
    window.addEventListener("scroll", () => {
      
      elementHeader.current.classList.replace("grow", "schrink");
    })
    
    window.addEventListener("scrollend", () => {
      
      elementHeader.current.classList.replace("schrink", "grow");
     
    })
    
  }, []);

  //hook useRef
  const elementHeader = useRef();
  console.log("valeur dans hook useref: " + elementHeader.current);



  //Déclaration des fonctions

  /*** fonction qui determine la taille d'ecran**** */
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
    <header className="main-header grow">
      {isSmallScreen ? (
        <div className="container-banner">
          <img
            className="banner"
            src="/Asset/background-image/small-screen-banner.svg"
            alt="banner"
          ></img>
        </div>
      ) : null}

      <nav ref={elementHeader} className="header grow">
        <div className="header__container-div-sitebuilding">
          <SiteIsBuilding />
        </div>

        <div className="header__container-logo">
          <Link to="/">
            <img
              className="header-logo"
              src="/Asset/logo/logo-electravaux-v2.svg"
              alt="logo"
            ></img>
          </Link>
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
                text="Prise de courant"
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
              }
            </NavCollapse>
            {
              /*<NavCollapse
                urlImg=""
                text="Appareillages"
                colorText="second"
                sizePolice="1.2em"
                colorBg=""
              >
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Compteur d'énergie"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Disjoncteur de branchement"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Dispositif différentiel"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Disjonteur magnétothermique"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Télérupteur"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
                <NavLink
                  urlTo=""
                  urlImg=""
                  text="Horloge mécanique"
                  colorText="fourth"
                  tailleText="1em"
                  colorBg=""
                />
              </NavCollapse>*/
            }
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
          <div className="header__collapse-session">
            <CollapseUserSession />
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export { Header };
