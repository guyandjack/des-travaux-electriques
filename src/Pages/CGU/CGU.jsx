//Page "Condition Generale D'utilisation"

//Import du contenu des "CGU"
import { CGUContent } from "../../Data/CGU_content/CGU_content.jsx";

//Import des feuilles de style
import "../../Style/CSS/cgu.css";

//Fonction "CGU"
function PageCGU() {
  return (
    <div className="cgu">
      <h1 className="cgu__title">Conditions générales d'Utilisation</h1>
      <ul className="cgu__list">
        {CGUContent.map((document, index) => {
          return(
          <li className="cgu__list__li" key={index}>
            
            <p className="article-title">{document.title}</p>
            <p className="article-content">{document.content}</p>

          </li>
          )
        })}
      </ul>
    </div>
  );
}

export { PageCGU };
