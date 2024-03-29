//Composant "Header"

//Import des hook
import { useState, useEffect, useRef } from "react";


//Import des composants enfants
import { Link } from "react-router-dom";
import { SiteIsBuilding } from "../../Components/SiteIsBuilding/SiteIsBuilding.jsx";
import { NavMenu } from "../NavMenu/NavMenu.jsx";
import { NavCollapse } from "../NavCollapse/NavCollapse.jsx";
import { NavLink } from "../NavLink/NavLink.jsx";
import { CollapseUserSession } from "../CollapseUserSession/CollapseUserSession.jsx";

//Import des feuilles de style
import "../../Style/CSS/header.css";

//Import des fonctions
import { isScreenMobil } from "../../Utils/Function/isScreenMobil.js";

//Fonction "Header"
function Header() {
  //hook useRef

  //reference de l'élement nav dans le DOM
  const elementHeader = useRef();

  //bolleen qui indique si un ecouteur d'évènement lié au "scroll" est rataché à un élément du DOM
  //valeur de defaut false (aucun ecouteur rattaché)
  let eventScroll = useRef(false);

  //hooks State

  //boleen qui indique si l' ecran est de type mobile ou non
  //valeur de defaut true (ecran mobile)
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  //hook useEffect

  //determine si l' ecran est de type mobile, et ajuste le "UseState" en fonction
  useEffect(() => {
    let isMobilDisplay = isScreenMobil();

    setIsSmallScreen(isMobilDisplay);

    window.addEventListener("resize", () => {
      let isMobilDisplays = isScreenMobil();

      setIsSmallScreen(isMobilDisplays);
    });

    return () => {
      window.removeEventListener("resize", () => {
        isScreenMobil(setIsSmallScreen);
      });
    };
  }, []);

  //Applique un changement de class CSS en fonction du "scroll" et "scrollend"
  useEffect(() => {
    let changeGrowToSchrink = () => {
      elementHeader.current.classList.replace("grow", "schrink");
    };

    let changeSchrinkToGrow = () => {
      elementHeader.current.classList.replace("schrink", "grow");
    };

    //si aucun event de type scroll est deja rataché
    //et si l' ecran n'est pas  de type mobile,
    //on creé les  évenement "scroll"

    if (!eventScroll.current && !isSmallScreen) {
      window.addEventListener("scroll", changeGrowToSchrink);
      window.addEventListener("scrollend", changeSchrinkToGrow);
      eventScroll.current = true;
    }

    //Si un evenement scroll est déja rataché
    // et si l' ecran est de type mobile
    // on detruit les ecouteurs d'évènements

    if (eventScroll.current && isSmallScreen) {
      window.removeEventListener("scroll", changeGrowToSchrink);
      window.removeEventListener("scrollend", changeSchrinkToGrow);
      eventScroll.current = false;
    }
  }, [isSmallScreen, eventScroll.current]);

  return (
    <header className="main-header grow">
      <SiteIsBuilding />
      {isSmallScreen ? (
        <div className="container-banner">
          <img
            className="container-banner__banner"
            src="/Asset/background-image/small-screen-banner.svg"
            alt="banner"
          ></img>
        </div>
      ) : null}
      <nav ref={elementHeader} className="header grow">
        

        {isSmallScreen ? null : (
          <div className="header__container-logo">
            <Link to="/">
              <img
                className="header-logo"
                src="/Asset/logo/logo-electravaux-v2.svg"
                alt="logo"
              ></img>
            </Link>
          </div>
        )}

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

              <NavLink
                urlTo="/schema/circuit-eclairage"
                urlImg=""
                text="Circuit éclairage"
                colorText="fourth"
                tailleText="1em"
                colorBg=""
              />
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
        {isSmallScreen ? null : (
          <div className="header__collapse-session">
            <CollapseUserSession />
          </div>
        )}
      </nav>
    </header>
  );
}

export { Header };
