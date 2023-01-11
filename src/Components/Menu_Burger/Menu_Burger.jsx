//Composant "Menu_Burger"

//Import des hooks
import { useState } from "react";

//Import des composants enfants

import { Banner } from "../Banner/Banner.jsx";

//Import du module "Link"
import { Link } from "react-router-dom";


function MenuBurger() {
    const [isClicked, setIsClicked] = useState(false);

    let menuBurger = "menu-burger";
    let classAddMenuBurger;
    let menuIcon = "__icon";
    let menuBanner = "__banner";
    let urlIcon = "/Asset/image_component_header/icon-menu-burger-fifth-color.png";

    <div className={menuBurger + classAddMenuBurger}>
        
      <img
        className={menuIcon}
        src={urlIcon}
        alt=""
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      ></img>
      <Banner
        className={menuBanner}
        pagename="home"
        title="Des travaux électriques...!?"
        text="Schemas, explications..., astuces"
        color="fifth"
      />
    </div>;

    

     
}

export {MenuBurger}