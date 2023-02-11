//Composant "DoubleChevronMenu"

//Import des feuilles de style
import "../../Style/CSS/double_chevron_menu.css";


//Fonction "DoubleChevronMenu"

function DoubleChevronMenu({ isClick, color }) {

    
    let colorChevron;
    let chevronSize = " arrow-size"
    let addClassChevron = " rotate";
    let classContainerChevron = "container-chevron";

    switch (color) {
        case "first-color": {
            colorChevron = " first-color";
            break
       }
        case "second-color": {
            colorChevron = " second-color";
            break
       }
        case "third-color": {
            colorChevron = " third-color";
            break
       }
        case "fourth-color": {
            colorChevron = " fourth-color";
            break
       }
        case "fifth-color": {
            colorChevron = " fifth-color";
            break
        }
        default: {
            colorChevron = " first-color";
        }
   }

    return(
    <div
      className={
        isClick
          ? classContainerChevron  + addClassChevron
          : classContainerChevron 
      }
    >
        <span className={chevronSize + colorChevron} > ▼ </span>
      
    </div>
    )
}

export {DoubleChevronMenu}