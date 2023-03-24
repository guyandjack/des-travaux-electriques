// Composant "Banner"

//Import des "hooks"
import { useState } from "react";

//Importation des url des images pour les différents banner et taille d'écran
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";

//Import feuille de style
import "../../Style/CSS/banner.css";

function Banner({ pagename, text, title, colortext, colorbackground, urlimg }) {
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
  let classBackGroundImg = "banner__background-img";
  let classColorText = "";
  let classColorBg = "";
  let classBannerTitle = "banner__title";
  let classBannerText = "banner__text";

  switch (colortext) {
    case "first": {
      classColorText = " color-text-first";
      break;
    }
    case "second": {
      classColorText = " color-text-second";
      break;
    }
    case "third": {
      classColorText = " color-text-third";
      break;
    }
    case "fourth": {
      classColorText = " color-text-fourth";
      break;
    }
    case "fifth": {
      classColorText = " color-text-fifth";
      break;
    }
    default: {
      classColorText = " color-text-first";
    }
  }

  switch (colorbackground) {
    case "first": {
      classColorBg = " color-bg-first";
      break;
    }
    case "second": {
      classColorBg = " color-bg-second";
      break;
    }
    case "third": {
      classColorBg = " color-bg-third";
      break;
    }
    case "fourth": {
      classColorBg = " color-bg-fourth";
      break;
    }
    case "fifth": {
      classColorBg = " color-bg-fifth";
      break;
    }
    default: {
      classColorBg = " color-bg-first";
    }
  }

  window.addEventListener("resize", () => setSizeScreen(window.innerWidth));

  return (
    <div className={classBanner}>
      <div className={classBackGroundImg + classColorBg}></div>
      <img className="banner__img" src={imgUrl} alt=""></img>
      {title ? (
        <h1 className={classBannerTitle + classColorText}>{title}</h1>
      ) : null}
      {text ? <p className={classBannerText + classColorText}>{text}</p> : null}
    </div>
  );
}

export { Banner };
