//Composant "TitleHn"

//Import des hooks
import { useState, useEffect } from "react";

//Import des feuilles de style
import "../../../Style/CSS/title_n.css";

//Fonction "Title"

function TitleHN({ titleText, titleLevel, size, color }) {

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let titleList = document.querySelectorAll(".title-n");
    
    titleList.forEach(title => {
      
      title.firstElementChild.style.fontSize = size + "em";
      title.firstElementChild.style.color = colorTitle;
    })
  },[]);

  let classTitle = "title-n";
  let colorTitle = "";
 
  switch (color) {
    case "first":
      colorTitle = " first-color";
      break
    case "fifth":
      colorTitle = " fifth-color";
      break
    case "second":
      colorTitle = " second-color";
      break
    case "third":
      colorTitle = " third-color";
      break
    case "fourth":
      colorTitle = " fourth-color";
      break
    default:
      colorTitle = " first-color";
  }
  




  return (
    <div className={classTitle}>
      {titleLevel === 1 ? (
        <h1 className={size + colorTitle}>{titleText}</h1>
      ) : null}
      {titleLevel === 2 ? (
        <h2 className={size + colorTitle}>{titleText}</h2>
      ) : null}
      {titleLevel === 3 ? (
        <h3 className={size + colorTitle}>{titleText}</h3>
      ) : null}
      {titleLevel === 4 ? (
        <h4 className={size + colorTitle}>{titleText}</h4>
      ) : null}
      {titleLevel === 5 ? (
        <h5 className={size + colorTitle}>{titleText}</h5>
      ) : null}
      {titleLevel === 6 ? (
        <h6 className={size + colorTitle}>{titleText}</h6>
      ) : null}
    </div>
  );
}

export { TitleHN };
