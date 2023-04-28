//Composant "CommentUser"

//Import des composants enfants

import { ButtonStd } from "../ButtonStd/ButtonStd";
import { Formulaire } from "../Formulaire/Formulaire.jsx";

//Import des feuilles de style
import "../../Style/CSS/comment_user.css";

//Import de fonction
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

//Fonction "CommentUser"
function CommentUser({
  
  firstname,
  text,
  date,
  originalfirstname,
  originaltext,
  originalcommentid,
}) {

  //Variable de class de style
  let classContainerComment = "container-comment-user";
  let classCommentUser = "comment-user";
  let classContainerFormResponse = "container-form-response";
  let classDisplay = "display-form-response";

  //Recupere la referenece de la page dans l' url courante
  let actualUrl = window.location.href;
  let splitUrl = actualUrl.split("/");
  let refPage = splitUrl[splitUrl.length - 1];
  
  //Affiche le formulaire pour effectuer une réponse à un commentaire.

  function displayFormResponse(e) {
    let parent = e.parentElement;
    parent.nextElementSibling.classList.add(classDisplay);
    //preremplie les inputs utilisateurs si une user session est ouverte
    defaultValueInputUser.setValueInputUser();
  }

  return (
    <div className={classContainerComment}>
      <div className={classCommentUser}>
        <div className="container-info">
          <p className="comment-user-firstname">{firstname}</p>
          <p className="comment-user-date">{date}</p>
        </div>
        {originalfirstname && originaltext ? (
          <div className={"classContainerCommentOriginal"}>
            <div className="comment-user-firstname-original">
              {originalfirstname}
            </div>
            <div className="comment-user-text-original">{originaltext}</div>
          </div>
        ) : null}
        <div className="container-info">
          <span className="comment-user-text">{text}</span>
        </div>
        <div
          className="container-button"
          onClick={(evt) => {
            displayFormResponse(evt.currentTarget);
          }}
        >
          <ButtonStd
            btntype={"button"}
            name={"response"}
            text={"répondre"}
            colorbg={"third"}
            colortext={"fifth"}
            disabledButton={false}
          ></ButtonStd>
        </div>
      </div>
      <div className={classContainerFormResponse}>
        <Formulaire
          pageRef={refPage}
          isResponse={1}
          responseTo={firstname}
          responseIdTo={originalcommentid}
        />
      </div>
    </div>
  );
}

export { CommentUser };
