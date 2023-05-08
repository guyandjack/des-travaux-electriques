//Page "Home"

//Import des hooks
import { useState, useEffect } from "react";

//Import des breakpoints
import { breakPoint } from "../../Utils/break_point/break_point.js";

//import des fonction qui gerent la session user
import { pageAperture, pageClosure } from "../../Utils/Function/LocalStorage.js";

//Import des composants enfants
import { Banner } from "../../Components/Banner/Banner.jsx";
import { Title } from "../../Components/Title/Title.jsx";
import { BannerSlider } from "../../Components/BannerSlider/BannerSlider.jsx";


//Import des feuilles de style
import "../../Style/CSS/home.css";

//Fonction "PageHome"
function PageHome() {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

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
  let classLargeScreen = "home-hide";
  let classSmallScreen = "home-hide";

  if (sizeScreen > breakPoint.small_Max) {
    classLargeScreen = " home-display";
  } else {
    classLargeScreen = " home-hide";
  }

  window.addEventListener("resize", () => {
    setSizeScreen(window.innerWidth);
  });

  return (
    <div className={classHome}>
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

      <div className={classHome + classHomeWindow + classLargeScreen}>
        {/*<BannerSlider></BannerSlider>*/}
      </div>
    </div>
  );
}

export { PageHome };
