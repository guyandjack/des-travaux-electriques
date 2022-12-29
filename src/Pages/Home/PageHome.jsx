//Page "Home"

//Import des composants enfants
import { Banner } from "../../Components/Banner/Banner.jsx";
import { BannerSlider } from "../../Components/BannerSlider/BannerSlider.jsx";


//Import des feuilles de style
import "../../Style/CSS/home.css";

//Fonction "PageHome"
function PageHome() {
  return (
    <div className="home">
      <div className="home__container">
        
        <Banner className="home-banner" pagename="home" text=""></Banner>

        <div className="home-title">
          
          <h1 className="home-title__h1">Des travaux électriques...!?</h1>
          <p className="home-title__text">
            Voici quelques explications, schémas et astuces pour vous accompagner dans votre projet.
          </p>

        </div>
        
        <div className="home-window">
          <BannerSlider></BannerSlider>
        </div>

      </div>
    </div>
  );
}

export { PageHome };
