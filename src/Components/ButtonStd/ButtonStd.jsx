//Composant "ButtonStd"

//import des feuilles de style
import "../../Style/CSS/ButtonStd.css";

//Fonction "ButtonStd"

function ButtonStd({ btntype, nom, text, colorbg, colortext, disabledButton }) {
  let classColorBg;
  let classColorText;
  let classButtonStd = "button__std";
  let classButtonDisabled = disabledButton === "disabled" ? (" disabled") : ("");


  switch (colorbg) {
    case "first":
      classColorBg = " first-bg";
      break;

    case "second":
      classColorBg = " second-bg";
      break;

    case "third":
      classColorBg = " third-bg";
      break;

    case "fourth":
      classColorBg = " fourth-bg";
      break;

    case "fifth":
      classColorBg = " fifth-bg";
      break;

    default:
      classColorBg = "";
  }

  switch (colortext) {
    case "first":
      classColorText = " first-text";
      break;

    case "second":
      classColorText = " second-text";
      break;

    case "third":
      classColorText = " third-text";
      break;

    case "fourth":
      classColorText = " fourth-text";
      break;

    case "fifth":
      classColorText = " fifth-text";
      break;

    default:
      classColorText = " first-text";
  }

  return (
    <div className="button">
      <button
        className={
          classButtonStd + classColorBg + classColorText + classButtonDisabled
        }
        type={btntype}
        name={nom}
        disabled={disabledButton}
        
      >
        {text}
      </button>
    </div>
  );
}

export { ButtonStd };
