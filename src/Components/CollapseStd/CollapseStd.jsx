//Composant "collapseStd"

//import des hooks
import { useState, useEffect } from "react";

//Import fichier de style
//import "../../Style/CSS/collapsestd.css";

//Import des functions
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

function CollapseStd() {
  const [sessionValid, setSessionValid] = useState(false);
  const [userFirstName, setUserFirstName] = useState(null);

  useEffect(() => {
    //le composant s' affiche uniquement si une session est ouverte

    if (localStorage.getItem("session")) {
      let userSession = JSON.parse(localStorage.getItem("session"));

      if (userSession.validsession == "ok") {
        setUserFirstName(userSession.userDataFirstname);
        setSessionValid(true);
      }
    }
  }, []);

  //fonction qui efface la clef "session" du localstorage et recharge la page pour cleaner les formulaire
  function closeSession() {
    localStorage.removeItem("session");
    setSessionValid(false);
    setUserFirstName(null);
    window.location.reload();
  }

  return sessionValid == true ? (
    <div>
      <ul>
        <li>
          Bonjour {userFirstName}
          <ul>
            <li
              onClick={() => {
                closeSession();
              }}
            >
              Deconnexion
            </li>
          </ul>
        </li>
      </ul>
    </div>
  ) : null;
}

export { CollapseStd };
