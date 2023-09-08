//Composant "Formulaire"

//Import des hook
import { useEffect, useState } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire.css";

//Import de la fonction qui soumet le formulaire au backend
import { submitForm } from "../../Utils/Function/formComment/requete/formSubmit.js";

//Import des regEx pour le controle des inputs du formulaire
import { masqueText, masqueMail, masqueMessage } from "../../Utils/regEx/regExForm.js";


//Import des fonctions
const testSession = require("../../Utils/Function/LocalStorage");


//Fonction "Formulaire"

function Formulaire({ pageRef, isResponse, responseTo, responseIdTo }) {
  //Class css des élements du DOM
  let form = "form";
  let form_input = "form-input";
  let form_flag = "form__flag";
  let textarea = " textarea";
  let valid_text = " valid-text";
  let valid_border = " valid-border";
  let valid_border_textarea = " valid-border-textarea";
  let invalid_text = " invalid-text";
  let invalid_border = " invalid-border";
  let classHide = "hide";
  let classDisplay = "display-form-response";

  let messageErrorLastName = "";
  let messageErrorFirstName = "";
  let messageErrorMail = "";
  let messageErrorMsg = "";

  let contentPlaceHolder =
    "Vos commentaires et suggestions permetrons d'améliorer l' expérience utilisateur de nos futurs visiteurs";

  //Message d' erreur des differents champs du formulaire
  const [lastName, setLastname] = useState(messageErrorLastName);
  const [firstName, setFirstname] = useState(messageErrorFirstName);
  const [mail, setMail] = useState(messageErrorMail);
  const [msg, setMsg] = useState(messageErrorMsg);

  //const [userUrl, setUserUrl] = useState();

  //Boolean qui indique la validité des champs du formulaire
  const [isValidLastName, setisValidLastName] = useState(false);
  const [isValidFirstName, setisValidFirstName] = useState(false);
  const [isValidMail, setisValidMail] = useState(false);
  const [isValidMsg, setisValidMsg] = useState(false);

  const [isdisabled, setIsDisabled] = useState("disabled");
  const [isCommentStored, setIsCommentStored] = useState();
  const [isValidButton, setIsValidButton] = useState(false);

  //Valeur des inputs "utilisateur" du formulaire
  const [lastNameValue, setLastnameValue] = useState();
  const [firstNameValue, setFirstNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [contentlValue, setContentlValue] = useState();
  const [userDataValue, setUserDataValue] = useState("no");

  //Valeur des inputs "cachees" du formulaire
  const [userUrlValue, setUserUrlValue] = useState(window.location.href);
  const [pageRefValue, setPagerefValue] = useState(pageRef);
  const [isResponseValue, setIsResponseValue] = useState(isResponse);
  const [originalCommentIdValue, setOriginalCommentIdValue] = useState(responseIdTo);

  //Indique si une session user est ouverte
  const [isSessionOpen, setIsSessionOpen] = useState(testSession.isSessionOpen());

  //si une session est ouverte:
  //le formulaire doit envoyer au backend la valeur "userData" egal à "ok" 
  //Les states mame, firstname, email doivent etre mis à jour avec le contenu du localstorage pour la soumission du formulaire
  // on valide ensuite les entrees nom prenom et email pour l'utilisateur (effet visuel)

  if (isSessionOpen == true) {
    let dataUser = JSON.parse(localStorage.getItem("session"));

    if (userDataValue !== "ok") {
      setUserDataValue("ok");
    }

    if (dataUser.userDataName !== lastNameValue) {
      setLastnameValue(dataUser.userDataName);
      setisValidLastName(true);
    }

    if (dataUser.userDataFirstname !== firstNameValue) {
      setFirstNameValue(dataUser.userDataFirstname);
      setisValidFirstName(true);
    }

    if (dataUser.userDataEmail !== emailValue) {
      setEmailValue(dataUser.userDataEmail);
      setisValidMail(true);
    }
  }

  //Corps de la requette fetch pour soummission du formulaire
  let bodyrequest = {
    lastname: lastNameValue,
    firstname: firstNameValue,
    email: emailValue,
    comment: contentlValue,
    userurl: userUrlValue,
    pageref: pageRefValue,
    isresponse: isResponseValue,
    originalcommentid: originalCommentIdValue,
    userdata: userDataValue,
  };

  //valide le button submit en fonction de l'etat des inputs utilisateur
  useEffect(() => {
    if (
      isValidLastName === true &&
      isValidFirstName === true &&
      isValidMail === true &&
      isValidMsg === true
    ) {
      setIsDisabled("");
      setIsValidButton(true);
    } else {
      setIsDisabled("disabled");
      setIsValidButton(false);
    }
  }, [isValidLastName, isValidFirstName, isValidMail, isValidMsg]);

  

  /********************* declaration des fonctions ************************ */

  

  /****** fonction de validation des inputs user************ */

  //Valide l'input "lastName"
  function validLastName(e) {
    if (masqueText.test(e.target.value) !== true) {
      messageErrorLastName = "veuillez entrer un nom valide";
      setisValidLastName(false);
      setLastname(messageErrorLastName);
    } else {
      messageErrorLastName = "";
      setisValidLastName(true);
      setLastname(messageErrorLastName);
      setLastnameValue(e.target.value);
    }
  }

  //Valide l' input "firstName"
  function validFirstName(e) {
    if (masqueText.test(e.target.value) !== true) {
      messageErrorFirstName = "Veuillez entrer un prénom valide";
      setisValidFirstName(false);
      setFirstname(messageErrorFirstName);
    } else {
      messageErrorFirstName = "";
      setisValidFirstName(true);
      setFirstname(messageErrorFirstName);
      setFirstNameValue(e.target.value);
    }
  }

  //Valide l' input "mail"
  function validMail(e) {
    if (masqueMail.test(e.target.value) !== true) {
      messageErrorMail = "Veuillez entrer un email valide";
      setisValidMail(false);
      setMail(messageErrorMail);
    } else {
      messageErrorMail = "";
      setisValidMail(true);
      setMail(messageErrorMail);
      setEmailValue(e.target.value);
    }
  }

  //Valide le message utilisateur
  function validMessage(e) {
    if (masqueMessage.test(e.target.value) !== true) {
      messageErrorMsg =
        "Nbr de carracteres incorrects ou carracteres non autorisés";
      setisValidMsg(false);
      setMsg(messageErrorMsg);
    } else {
      messageErrorMsg = "";
      setisValidMsg(true);
      setMsg(messageErrorMsg);
      setContentlValue(e.target.value);
    }
  }

  //valid l' autorisation de creer une session user
  function validSessionUser(e) {
    if (e.target.checked) {
      setUserDataValue("ok");
    }

    if (!e.target.checked) {
      setUserDataValue("no");
    }
  }

  //positionne la hauteur à 0px du conteneur du formulaire
  function hideResponseForm(e) {
    let parent = e.parentElement;
    let form = parent.parentElement;
    let containerForm = form.parentElement;
    containerForm.classList.remove(classDisplay);
  }

  return (
    <form
      className={form}
      method="post"
      onSubmit={(evt) => {
        submitForm(evt, bodyrequest);
        setOriginalCommentIdValue(responseIdTo);
        //window.location.reload();
      }}
    >
      {isResponse ? (
        <div className="form__text-response">
          <p className="form__text">
            Répondre à <span>{responseTo}</span>
          </p>
          <div
            onClick={(evt) => {
              hideResponseForm(evt.currentTarget);
            }}
          >
            <ButtonStd
              btntype="button"
              nom="btn-cancel-response"
              text="Annuler votre réponse"
              colorbg="second"
              colortext="fifth"
            />
          </div>
        </div>
      ) : (
        <p className="form__text">
          <span>Laisser un commentaire</span>
          <br></br>
          Vos suggestions nous permettront d'améliorer notre service.
        </p>
      )}

      <div className="cont-label-input">
        <label className="form-label">
          <p className="text-label">
            Nom<span className="requis">*</span> <span> (Non publié)</span>
          </p>
          <input
            className={isValidLastName ? form_input + valid_border : form_input}
            type="text"
            name="lastname"
            min="2"
            max="20"
            placeholder="Votre nom..."
            required
            onChange={function (evt) {
              validLastName(evt);
            }}
          />
        </label>
      </div>
      <p
        className={
          isValidLastName ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {lastName}
      </p>
      <div className="cont-label-input">
        <label className="form-label">
          <p className="text-label">
            Prénom<span className="requis"> *</span>
          </p>
          <input
            className={
              isValidFirstName ? form_input + valid_border : form_input
            }
            type="text"
            name="firstname"
            min="2"
            max="20"
            placeholder="Votre prénom..."
            required
            onChange={function (evt) {
              validFirstName(evt);
            }}
          />
        </label>
      </div>
      <p
        className={
          isValidFirstName ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {firstName}
      </p>
      <div className="cont-label-input">
        <label className="form-label">
          <p className="text-label">
            Email<span className="requis"> *</span>
            <span>(Non publié)</span>
          </p>
          <input
            className={isValidMail ? form_input + valid_border : form_input}
            type="email"
            name="email"
            min="2"
            max="55"
            placeholder="Votre email..."
            required
            onChange={function (evt) {
              validMail(evt);
            }}
          />
        </label>
      </div>
      <p
        className={
          isValidMail ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {mail}
      </p>
      {isSessionOpen == true ? (
        <div className="cont-label-input">
          <label className="container-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              name="userdata"
              value="ok"
              checked
              disabled
            />
            <p className="text-label">
              Se souvenir de moi si je souhaite rajouter un commentaire pendant
              la même session.
            </p>
          </label>
        </div>
      ) : (
        <div className="cont-label-input">
          <label className="container-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              name="userdata"
              value="ok"
              onClick={function (evt) {
                validSessionUser(evt);
              }}
            />
            <p className="text-checkbox">
              Se souvenir de moi si je souhaite rajouter un commentaire pendant
              la même session.
            </p>
          </label>
        </div>
      )}

      <div className="cont-label-input">
        <label className="form-label" min="2" max="200">
          <p className="text-label">
            Entrez votre texte...<span className="requis"> *</span>
          </p>
          <textarea
            className={isValidMsg ? textarea + valid_border_textarea : textarea}
            name="comment"
            min="10"
            max="200"
            required
            onChange={function (evt) {
              validMessage(evt);
            }}
          ></textarea>
        </label>
      </div>
      <p
        className={
          isValidMsg ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {msg}
      </p>
      <input type="hidden" name="sujet"  />
      <input type="hidden" name="userurl" value={userUrlValue} />
      <input type="hidden" name="pageref" value={pageRefValue} />
      <input type="hidden" name="isresponse" value={isResponseValue} />
      <input
        type="hidden"
        name="originalcommentid"
        value={originalCommentIdValue}
      />

      <div className="cont-valid-btn">
        <ButtonStd
          btntype="submit"
          mom="btn-submit"
          text="Publiez votre commentaire"
          colorbg="first"
          colortext="fifth"
          disabledButton={isdisabled}
        ></ButtonStd>
      </div>
    </form>
  );
}

export { Formulaire };
