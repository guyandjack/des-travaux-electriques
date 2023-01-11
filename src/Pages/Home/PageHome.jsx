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
      <div className="home__banner">
        <Banner pagename="home" text=""></Banner>
      </div>

      <div className="home__title">
        <Title
          className="home__title"
          pagetype="home"
          title="Des travaux électriques...!?"
          text="Schémas, explications... et astuces, pour vous accompagner dans votre projet."
        ></Title>
      </div>

      <div className="home__window">
        <BannerSlider></BannerSlider>
      </div>
    </div>
  );
}

export { PageHome };
