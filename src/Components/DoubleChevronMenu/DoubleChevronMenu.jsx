//Composant "DoubleChevronMenu"

//Import des feuilles de style
import "../../Style/CSS/double_chevron_menu.css";


//Fonction "DoubleChevronMenu"

function DoubleChevronMenu({ isClick, color }) {

    
    let urlImg;
    let addClassChevron = " rotate";
    let classContainerChevron = "container-chevron";

    switch (color) {
        case "first-color": {
            urlImg = "/Asset/image_component_header/double-chevron-menu-first-color.png";
            break
       }
        case "second-color": {
            urlImg = "/Asset/image_component_header/double-chevron-menu-second-color.png";
            break
       }
        case "third-color": {
            urlImg = "/Asset/image_component_header/double-chevron-menu-third-color.png";
            break
       }
        case "fourth-color": {
            urlImg = "/Asset/image_component_header/double-chevron-menu-fourth-color.png";
            break
       }
        case "fifth-color": {
            urlImg = "/Asset/image_component_header/double-chevron-menu-fifth-color.png";
            break
        }
        default: {
            urlImg = "/Asset/image_component_header/double-chevron-menu-first-color.png";
        }
   }

    return(
    <div
      className={
        isClick
          ? classContainerChevron + addClassChevron
          : classContainerChevron
      }
    >
        <img className="img-size" src={urlImg} alt="fleche du menu déroulant"></img>
      
    </div>
    )
}

export {DoubleChevronMenu}