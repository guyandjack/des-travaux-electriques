//Composant "BannerSlider"


//Import des composant à faire defiler
import { componentsForBannerSlider } from "../../Data/array_components_banner_slide/array_components_banner_slide.jsx";


//Import des composants enfants


//Import des feuilles de style
import "../../Style/CSS/banner-slider.css";



//Fonction "BannerSlider"

function BannerSlider() {
    return (
        <ul className="banner-slider">
            
            {componentsForBannerSlider.map((element, index) => {
                return <li key={index} id={index} className="banner-slider__li">{element}</li>
            })}
            
        </ul>
    )
}

export {BannerSlider}