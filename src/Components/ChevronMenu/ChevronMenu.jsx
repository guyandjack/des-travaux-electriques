//Composant "DoubleChevronMenu"

//Import des feuilles de style
import "../../Style/CSS/chevron_menu.css";

//Fonction "DoubleChevronMenu"

function ChevronMenu({ isClick, color }) {
  let colorChevron;
  let chevronSize = " arrow-size";
  let addClassChevron = " rotate";
  let classContainerChevron = "container-chevron";

  switch (color) {
    case "first": {
      colorChevron = " first-color";
      break;
    }
    case "second": {
      colorChevron = " second-color";
      break;
    }
    case "third": {
      colorChevron = " third-color";
      break;
    }
    case "fourth": {
      colorChevron = " fourth-color";
      break;
    }
    case "fifth": {
      colorChevron = " fifth-color";
      break;
    }
    default: {
      colorChevron = " first-color";
    }
  }

  return (
    <div
      className={
        isClick
          ? classContainerChevron + addClassChevron
          : classContainerChevron
      }
    >
      <span className={chevronSize + colorChevron}> ▼ </span>
    </div>
  );
}

export { ChevronMenu };
