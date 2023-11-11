//Page "Home"

//Import des hooks
import { useState, useEffect } from "react";

//Import des breakpoints
import { breakPoint } from "../../Utils/break_point/break_point.js";

//import des fonctions qui gerent la session user
import {
  pageAperture,
  pageClosure,
} from "../../Utils/Function/LocalStorage.js";

//Import des fonctions communes
import { scrollTo } from "../../Utils/Function/scrollTo.js";

import { isScreenMobil } from "../../Utils/Function/isScreenMobil.js";

//Import des composants enfants
import { Banner } from "../../Components/Banner/Banner.jsx";
import { Title } from "../../Components/Title/Title.jsx";
import { Loader } from "../../Components/Loader/Loader.jsx";

//Import des feuilles de style
import "../../Style/CSS/home.css";

//Fonction "PageHome"
function PageHome() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  //Ajuste le scroll en haut de page
  useEffect(() => {
    scrollTo("[id='root']");
  }, []);

  useEffect(() => {
    let isMobilScreen = isScreenMobil();
    setSizeScreen(isMobilScreen);

    window.addEventListener("resize", () => {
      let isMobilScreen = isScreenMobil();
      setSizeScreen(isMobilScreen);
    });

    return () => {
      window.removeEventListener("resize", () => {
        let isMobilScreen = isScreenMobil();
        setSizeScreen(isMobilScreen);
      });
    };
  }, [sizeScreen]);

  //Gere les sessions utilisteurs
  useEffect(() => {
    //reference la page consultée dans le local storage
    pageAperture();

    //Suite a un evenement fermeture de page on gere la session utilisateur
    window.addEventListener("beforeunload", () => {
      pageClosure();
    });
  }, []);

  let classHome = "home";
  let classHomeBanner = "__banner";
  let classHomeTitle = "__title";
  let classHomeWindow = "__window";
  let classLargeScreen = " home-display";
  let classSmallScreen = "home-hide";

  return (
    <div className={classHome}>
      <Loader />
      {!sizeScreen ? (
        <div>
          <div className={classHome + classHomeBanner + classLargeScreen}>
            <Banner pagename="home" text="" colorbackground="first"></Banner>
          </div>

          <div className={classHome + classHomeTitle + classLargeScreen}>
            <Title
              pagetype="home"
              title="Des travaux électriques...!?"
              text="Schémas, explications... et astuces, pour vous accompagner dans votre projet."
            ></Title>
          </div>
        </div>
      ) : (
        <Title
          pagetype="home"
          title="Des travaux électriques...!?"
            text="Schémas, explications... et astuces, pour vous accompagner dans votre projet."
            titlecolor="second-color"
            textcolor="first-color"
        ></Title>
      )}
    </div>
  );
}

export { PageHome };
