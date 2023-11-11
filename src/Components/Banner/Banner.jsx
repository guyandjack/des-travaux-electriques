// Composant "Banner"

//Import des "hooks"
import { useState, useRef, useEffect } from "react";

//Importation des url des images pour les différents banner et taille d'écran
import { urlImgBanner } from "../../Data/url_image_banner/url_image_banner.js";

//Import des functions
import { giveImageType } from "../../Utils/Function/giveImageType.js";

//Import feuille de style
import "../../Style/CSS/banner.css";

function Banner({ pagename, text, title, colortext, colorbackground, urlimg }) {
  /**********  hooks  ******/
  // "useState"

  const [imgUrl, setImgUrl] = useState();

  //"useEffect"
  //Selectionne l' url de  l'image à afficher en fonction de la taille de l'ecran.
  useEffect(() => {
    let imageType = giveImageType();
    let url = urlImgBanner[pagename][imageType];
    setImgUrl(url);

    window.addEventListener("resize", () => {
      let imageType = giveImageType();
      let url = urlImgBanner[pagename][imageType];
      setImgUrl(url);
    });

    return () => {
      window.removeEventListener("resize", () => {
        let imageType = giveImageType();
        let url = urlImgBanner[pagename][imageType];
        setImgUrl(url);
      });
    };
  }, []);

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
