//Page "Contact"

//Import des composants enfants
import { Formulaire } from "../../Components/Formulaire/Formulaire.jsx";

//Import des feuilles de style
import "../../Style/CSS/contact.css";

//Fonction "PageContact"
function PageContact() {
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

  return (
    <div className="container-form">
      <Formulaire 
        formref={"pc16a"}
      />
      {comment ? (
        <div className="comment-stored">
          <span className="comment-stored__text">Votre commentaire a été envoyé</span>
          <span className="comment-stored__cross" onClick={(e)=>{hide(e.currentTarget)}}>X</span>
        </div>
      ) : null}
    </div>
  );
}

export { PageContact };
