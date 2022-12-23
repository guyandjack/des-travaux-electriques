// Composant "Banner"

//Import du hook "useState"
import { useState } from "react";

//Importation des url des images pour les différents banner et taille d'écran
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";

//Import feuille de style
import "../../Style/CSS/banner.css";


function Banner({ pagename, text }) {
    
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  function getTypeScreen() {
    if (sizeScreen >= 0 && sizeScreen <= 768) {
      return "medium";
    }

    if (sizeScreen >= 769 && sizeScreen <= 992) {
      return "large";
    }

    if (sizeScreen >= 993 && sizeScreen <= 1500) {
      return "xlarge";
    }

    if (sizeScreen >= 1501) {
      return "xxlarge";
    }
  }

  let typeScreen = getTypeScreen();
  let imgUrl = urlImgBanner[pagename][typeScreen];

  window.addEventListener("resize", () => setSizeScreen(window.innerWidth));

    return (
      
    <div className="banner" >
          
        <div className="banner__backgroundcolor"></div>
        <img className="banner__img" src={imgUrl} alt="image non disponible"></img>
        {text ? <p className="banner__text">{text}</p> : null}
      
    </div>
  );
}

export {Banner}