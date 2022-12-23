//Tableau de composant à faire defiler dans le "bannerslide"

//Import des composants enfants
import { ButtonLink } from "../../Components/Button_Link/Button_Link.jsx";

let componentsForBannerSlider = [
  <ButtonLink
    
    url="/pc16a"
    text="Prise de courant"
  ></ButtonLink>,
  <ButtonLink
    
    url="/circuit-specialise"
    text="Circuits specialisés"
  ></ButtonLink>,
  <ButtonLink
    
    url="/circuit-eclairage"
    text="Circuits éclairage"
  ></ButtonLink>,
  <ButtonLink
    
    url="/tgbt"
    text="Tableau de répartition"
  ></ButtonLink>,
  <ButtonLink
    
    url="tc"
    text="Tableau de communication"
  ></ButtonLink>,
  <ButtonLink
    
    url="/ddr"
    text="Dispositifs Differentiel Residuel (DDR)"
  ></ButtonLink>,
  <ButtonLink
    
    url="/db"
    text="Disjoncteur de branchement"
  ></ButtonLink>,
  <ButtonLink
    
    url="/disjoncteur"
    text="Disjoncteur magnetothermique"
  ></ButtonLink>,
];

export { componentsForBannerSlider };
