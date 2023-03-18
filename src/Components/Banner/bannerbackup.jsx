// Composant "Banner"

//Import des "hooks"
import { useState } from "react";

//Importation des url des images pour les différents banner et taille d'écran
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";

//Import feuille de style
import "../../Style/CSS/banner.css";

function Banner({ pagename, text, title, color }) {
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
  let imgUrl = urlImgBanner[pagename]["medium"];

  let classBanner = "banner";
  let classColor = " classColor";
  let classBannerTitle = "banner__title";
  let classBannerText = "banner__text";

  switch (color) {
    case "first": {
      classColor = " color-first";
      break;
    }
    case "second": {
      classColor = " color-second";
      break;
    }
    case "third": {
      classColor = " color-third";
      break;
    }
    case "fourth": {
      classColor = " color-fourth";
      break;
    }
    case "fifth": {
      classColor = " color-fifth";
      break;
    }
    default: {
      classColor = " color-first";
    }
  }

  window.addEventListener("resize", () => setSizeScreen(window.innerWidth));

  return (
    <div className="banner">
      <div className="banner__backgroundcolor"></div>
      <img className="banner__img" src={imgUrl} alt=""></img>
      {title ? (
        <h1 className={classBannerTitle + classColor}>{title}</h1>
      ) : null}
      {text ? <p className={classBannerText + classColor}>{text}</p> : null}
    </div>
  );
}

export { Banner };
