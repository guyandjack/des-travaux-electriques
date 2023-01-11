//Composant "BannerSlider"


//Import des composant à faire défiler
import { ListLinksSousMenu } from "../../Data/List_links_sous_menu/List_links_sous_menu.jsx";


//Import des composants enfants
import { ButtonLink } from "../Button_Link/Button_Link.jsx";


//Import des feuilles de style
import "../../Style/CSS/banner-slider.css";



//Fonction "BannerSlider"

function BannerSlider() {
  let refId = "link";
  let classLien = "button-link-banner";
    return (
      
        <ul className="banner-slider">
          {ListLinksSousMenu.map((element, index) => {
            return (
              <li key={index} id={refId + index} className="banner-slider__li">
                
                <ButtonLink
                  classLink={classLien}
                  url={element.url }
                  text={ element.text}
                  urlImg={ element.urlImg}
                  
                />

              </li>
            );
          })}
        </ul>
      
    );
}

export {BannerSlider}