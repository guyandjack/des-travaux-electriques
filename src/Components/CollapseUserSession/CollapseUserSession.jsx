//Composant "collapseUserSession"

//import des hooks
import { useState, useEffect } from "react";

//Import fichier de style
import "../../Style/CSS/collapse_user_session.css";



//Function "CollapseUserSession"
function CollapseUserSession() {
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

  //fonction qui efface la clef "session" du localstorage et recharge la page pour cleaner les formulaires
  function closeSession() {
    localStorage.removeItem("session");
    localStorage.removeItem("activePage");
    setSessionValid(false);
    setUserFirstName(null);
    window.location.reload();
  }

  return sessionValid == true ? (
    <div className="container-user-session">
      <div className="container-icon">
        
        <svg className="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path />
        </svg>

        <p className="text">Bonjour<br></br>{'" '+ userFirstName +' "'}</p>
      </div>

      <ul className="list">
        <li
          className="list-li"
          onClick={() => {
            closeSession();
          }}
        >
          Deconnexion
        </li>
      </ul>
    </div>
  ) : null;
}

export { CollapseUserSession };
