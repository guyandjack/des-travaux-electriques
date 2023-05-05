
//Page "erreur-404"

//Import des hooks
import { useState, useEffect } from "react";

//import des fonction qui gerent la session user
import { pageAperture, pageClosure } from "../../Utils/Function/LocalStorage.js";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../Style/CSS/error_404.css";


//Fonction "PageErreur"
function PageErreur() {

  //Gere les sessions utilisteurs
  useEffect(() => {
    //reference la page consultée dans le local storage
    pageAperture();

    //Suite a un evenement fermeture de page on gere la session utilisateur
    window.addEventListener("beforeunload", () => {
      pageClosure();
    });
  }, []);
    
    
  return (
    <div className="error">
      <p className="error__404">
        Oups...page introuvable <br className="error__404__split"></br>...Erreur
        404
      </p>
      <Link className="error__link" to="/">
        Retour sur la page accueil
      </Link>
    </div>
  );
}

export { PageErreur}