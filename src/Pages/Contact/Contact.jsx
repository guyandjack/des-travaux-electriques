//Page "Contact"

//Import des hooks
import { useEffect } from "react";

//Import des composants enfants
import { FormulaireContact } from "../../Components/Formulaire/Formulaire-contact.jsx";
import { Loader } from "../../Components/Loader/Loader.jsx";

//Import des fonctions
import { scrollTo } from "../../Utils/Function/scrollTo.js";

//Import des feuilles de style
import "../../Style/CSS/contact.css";

//Fonction "PageContact"
function PageContact() {

  useEffect(() => {
    scrollTo("#root");
    
  }, []);


  let url = new URL(window.location.href);
  let params = new URLSearchParams(url.search);
  let comment = false;

  if (params.has("comment")) {
    comment = true;
  }

  function hide(evt) {
    let parent = evt.parentElement;
    parent.classList.add("hide")
  }
  //Reference de la page
  const refOfPage = "contact";

  return (
    <div className="container-form">
      <Loader />
      <FormulaireContact refPage={refOfPage} />
      {comment ? (
        <div className="comment-stored">
          <span className="comment-stored__text">
            Votre commentaire a été envoyé
          </span>
          <span
            className="comment-stored__cross"
            onClick={(e) => {
              hide(e.currentTarget);
            }}
          >
            X
          </span>
        </div>
      ) : null}
    </div>
  );
}

export { PageContact };
