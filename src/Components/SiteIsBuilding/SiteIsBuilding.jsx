//Composant "SiteIsBuilding"

//Import des hook
import { useEffect } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd.jsx";

//Import des feuilles de style
import "../../Style/CSS/site_is_building.css";

//constantes
const imgUrl = "/Asset/icon/balise-travaux/balise-travaux.png";
const imgAlt = "décoration popup";

function SiteIsBuilding() {
  const classNameHide = "site-building-hide";
  const classNameSiteBuilding = "site-building";
  let isInformed = localStorage.getItem("info")
    ? localStorage.getItem("info")
    : null;

  function closePopup(evt) {
    let parent = evt.parentElement;
    localStorage.setItem("info", "ok");
    parent.classList.add(classNameHide);
  }

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      if (localStorage.getItem("info")) {
        localStorage.removeItem("info");
      }
    });
  });

  return (
    <div>
      {isInformed !== null ? null : (
        <div className={classNameSiteBuilding}>
          <p className="site-building__title">
            Site en construction
          </p>
          <p className="site-building__text">
            La navigation se limite à quelques pages pour le moment.<br></br>
          </p>
          <p className="site-building__text-end">Bonne visite!</p>
          <div className="site-building__icon" name="1">
            <img src={imgUrl} alt={imgAlt}></img>
          </div>
          <div className="site-building__icon" name="2">
            <img src={imgUrl} alt={imgAlt}></img>
          </div>
          <p
            className="site-building__closure"
            onClick={(e) => {
              closePopup(e.currentTarget);
            }}
          >
            OK merci
          </p>
        </div>
      )}
    </div>
  );
}

export { SiteIsBuilding };
