// Composant "Banner"


//Import feuille de style
import "../../Style/CSS/banner.css";


function Banner({ text, title, textcolor, imgUrl }) {
  

  let classBanner = "banner";
  let classColor = "";
  let classBannerTitle = "banner__title";
  let classBannerText = "banner__text";
  

  switch (textcolor) {
    case "first": {
      classColor = " color-first";
      break
    }
    case "second": {
      classColor = " color-second";
      break
    }
    case "third": {
      classColor = " color-third";
      break
    }
    case "fourth": {
      classColor = " color-fourth";
      break
    }
    case "fifth": {
      classColor = " color-fifth";
      break
    }
    default: {
      classColor = " color-first";
      }
  }

    return (
      
    <div className={classBanner}>
          
        <div className="banner__backgroundcolor"></div>
        <img className="banner__img" src={imgUrl} alt=""></img>
        {title ? <h1 className={classBannerTitle + classColor}>{title}</h1> : null}
        {text ? <p className={classBannerText + classColor}>{text}</p> : null}
      
    </div>
  );
}

export {Banner}