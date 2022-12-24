//Page "Home"

//Import des composants enfants
import { Banner } from "../../Components/Banner/Banner.jsx";
import { Title } from "../../Components/Title/Title.jsx";
import { BannerSlider } from "../../Components/BannerSlider/BannerSlider.jsx";


//Import des feuilles de style
import "../../Style/CSS/home.css";

//Fonction "PageHome"
function PageHome() {
  return (
    <div className="home">
      <div className="home__container">
        <Banner className="home__banner" pagename="home" text=""></Banner>
        <div className="home__title">
          <Title
            pagetype="home"
            text="Des travaux électriques...!?"
            text_2="Pas de panique!!!"
            text_3=""
          />
          
        </div>
        <div className="home__window">
          <BannerSlider></BannerSlider>
        </div>
      </div>
    </div>
  );
}

export { PageHome };
