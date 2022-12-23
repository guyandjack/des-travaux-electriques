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
          
      <Banner pagename="home" title="Des travaux électriques...?!"></Banner>
      <div className="window"></div>
      <BannerSlider></BannerSlider>
      
    </div>
  );
}

export { PageHome };
