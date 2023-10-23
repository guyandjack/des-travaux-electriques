//Composant "collapseUserSession"

//import des hooks
import { useState, useEffect, useRef } from "react";

//Import fichier de style
import "../../Style/CSS/collapse_user_session.css";



//Function "CollapseUserSession"
function CollapseUserSession() {

  //hook useref
  const list = useRef();

  //hook "useState"
  const [sessionValid, setSessionValid] = useState();
  const [userFirstName, setUserFirstName] = useState(null);

  //hook "useEffect"
  useEffect(() => {
    //le composant s'affiche uniquement si une session est ouverte

    if (localStorage.getItem("UserSession")) {
      let userSession = JSON.parse(localStorage.getItem("UserSession"));

      if (userSession.validsession == "ok") {
        
        setUserFirstName(userSession.userDataFirstname);
        setSessionValid(true);
      }
    }
  }, []);

  //fonction qui efface la clef "session" du localstorage et recharge la page pour cleaner les formulaires
  function closeSession() {
    localStorage.removeItem("UserSession");
    localStorage.removeItem("activePage");
    setSessionValid(false);
    setUserFirstName(null);
    window.location.reload();
  }

  //Variable pour les class de style css

  let smalldisplay = "small-display";

  return sessionValid == true ? (
    <div className="collapse-session">
      <div
        className="container-icon"
        onClick={() => {
          list.current.classList.toggle("display-none");
        }}
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M480 575q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160 896v-94q0-38 19-65t49-41q67-30 128.5-45T480 636q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800 764 800 802v94H160Zm60-60h520v-34q0-16-9.5-30.5T707 750q-64-31-117-42.5T480 696q-57 0-111 11.5T252 750q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570 425q0-39-25.5-64.5T480 335q-39 0-64.5 25.5T390 425q0 39 25.5 64.5T480 515Zm0-90Zm0 411Z" />
        </svg>

        <p className="text">
          Bonjour<br></br>
          <span className="color-name">{" " + userFirstName}</span>
        </p>
      </div>

      <ul ref={list} className="list display-none">
        <li
          className="list-li"
          onClick={() => {
            closeSession();
          }}
        >
          Déconnexion
        </li>
      </ul>
    </div>
  ) : null;
}

export { CollapseUserSession };
