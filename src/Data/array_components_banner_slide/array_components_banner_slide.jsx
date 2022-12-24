//Tableau de composant à faire defiler dans le "bannerslide"

//Import des composants enfants
import { ButtonLink } from "../../Components/Button_Link/Button_Link.jsx";

let componentsForBannerSlider = [
  <ButtonLink
    url="/pc16a"
    text="Prise de courant"
    urlImg="/Asset/images_page_prise_de_courant_16A/pc-face-avant.png"
  ></ButtonLink>,
  <ButtonLink
    url="/circuit-specialise"
    text="Circuits specialisés"
    urlImg="/Asset/image_page_circuit_specialise/cumulus.png"
  ></ButtonLink>,
  <ButtonLink
    url="/circuit-eclairage"
    text="Circuits éclairage"
    urlImg="/image_page_circuit_eclairage/double-vv.png"
  ></ButtonLink>,
  <ButtonLink url="/tgbt" text="Tableau de répartition" urlImg=""></ButtonLink>,
  <ButtonLink url="tc" text="Tableau de communication" urlImg=""></ButtonLink>,
  <ButtonLink
    url="/ddr"
    text="Dispositifs Differentiel Residuel (DDR)"
    urlImg="/Asset/image_page_dispositif_differentiel_residuel/ddr-63A.png"
  ></ButtonLink>,
  <ButtonLink
    url="/db"
    text="Disjoncteur de branchement"
    urlImg="/Asset/image_page_disjoncteur_de_branchement/DB-selectif.png"
  ></ButtonLink>,
  <ButtonLink
    url="/disjoncteur"
    text="Disjoncteur magnetothermique"
    urlImg="Asset/image_page_disjoncteur_magneto_thermique/disjoncteur-16A.png"
  ></ButtonLink>,
];

export { componentsForBannerSlider };
