//Composant "MenuSmallScreen"

//Import des hooks
import { useState } from "react";

//Import des composants enfants
import { Banner } from "../Banner/Banner.jsx";
import { MenuBurger } from "../MenuBurger/MenuBurger.jsx";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/menu_small_screen.css";

function MenuSmallScreen() {
  const [isClicked, setIsClicked] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // variable class de style
  let menuSmallScreen = "menu-small-screen";
  let classAddMenuBurger = " ";
  let menuIcon = "__icon";
  let menuBanner = "__banner";
  let containerMenuBurger = "__container-menu-burger";
  let urlIcon =
    "/Asset/images_component_header/icon-menu-burger-fifth-color.png";

  
  //Declaration des fonctions

  function getScreenSize() {
    let screenSize = window.innerWidth;

    if (screenSize < 579) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }

   window.addEventListener("resize", () => {
     getScreenSize();
   });



  return (
    <div className={menuSmallScreen + classAddMenuBurger}>
      <img
        className={menuSmallScreen + menuIcon}
        src={urlIcon}
        alt=""
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      ></img>

      <div className={menuSmallScreen + menuBanner}>
        <Banner
          pagename="home"
          title="Des travaux électriques...!?"
          text="Schémas, explications..., astuces"
          color="fifth"
        />
      </div>

      <div className={menuSmallScreen + containerMenuBurger}>
        <MenuBurger click={isClicked} />
      </div>

      {!isSmallScreen ? (
        <div className={menuSmallScreen + containerDivSession}>
          <CollapseUserSession />
        </div>
      ) : null}
    </div>
  );
}

export { MenuSmallScreen };
