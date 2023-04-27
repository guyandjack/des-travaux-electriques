//Composant "Formulaire"

//Import des hook
import { useEffect, useState } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire.css";

//Import des fonctions
const testSession = require("../../Utils/Function/LocalStorage");

//Fonction "Formulaire"

function Formulaire({ pageRef, isResponse, responseTo, responseIdTo }) {
  console.log("valeur du originalcommentid dans 'formulaire': " + responseIdTo);
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

  let messageLastName = "";
  let messageFirstName = "";
  let messageMail = "";
  let messageMsg = "";

  let contentPlaceHolder =
    "Vos commentaires et suggestions permetrons d'améliorer l' expérience utilisateur de nos futurs visiteurs";

  //Message d' erreur des differents champs du formulaire
  const [lastName, setLastname] = useState(messageLastName);
  const [firstName, setFirstname] = useState(messageFirstName);
  const [mail, setMail] = useState(messageMail);
  const [msg, setMsg] = useState(messageMsg);

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
  const [originalCommentIdValue, setOriginalCommentIdValue] = useState(
    responseIdTo
  );

  //Indique si une session user est ouverte
  const [isSessionOpen, setIsSessionOpen] = useState(
    testSession.isSessionOpen()
  );
  console.log("session user ouverte?: " + isSessionOpen);

  //si une session est ouverte le formulaire doit renvoyer la valeur "userData" egal à "ok"
  // on valid ensuite les entrees nom prenom et email
  if(isSessionOpen == true && userDataValue !== "ok"){
    setUserDataValue("ok");
    setisValidLastName(true);
    setisValidFirstName(true);
    setisValidMail(true);
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

  /********************** expressions regulieres ******************/

  //Motif qui autorise lettres majuscules et minuscules uniquement
  let masqueText = /^[A-Za-z_'.-]{2,20}$/;

  //Motif qui autorise une adresse mail qui peut commencer par:
  //0 ou 4 chiffres
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
  //suivi d' un arobase
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
  //suivi d' un point
  //suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
  let masqueMail = /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,15}\.[0-9a-zA-Z_'.-]{2,15}$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, et underscore de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!ç\n\s]{10,200}$/;

  /********************* declaration des fonctions ************************ */

  //realise une requete "fetch" lors de la soummission du formulaire.
  function submitForm(e) {
    //evite la soumission automatique du formulaire
    e.preventDefault();

    fetch("http://localhost:3500/api/comment/", {
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyrequest),
    })
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))
      .then((datastringed) => localStorage.setItem("session", datastringed))
      .then(setOriginalCommentIdValue(""))
      .then(window.location.reload())

      .catch((error) => console.log(error));
  }

  /****** fonction de validation des inputs user************ */

  //Valide l' input "lastName"
  function validLastName(e) {
    if (masqueText.test(e.target.value) !== true || e.target.value.length < 2) {
      messageLastName = "veuillez entrer un nom valide";
      setisValidLastName(false);
      setLastname(messageLastName);
    } else {
      messageLastName = "";
      setisValidLastName(true);
      setLastname(messageLastName);
      setLastnameValue(e.target.value);
    }
  }

  //Valide l' input "firstName"
  function validFirstName(e) {
    if (masqueText.test(e.target.value) !== true) {
      messageFirstName = "Veuillez entrer un prénom valide";
      setisValidFirstName(false);
      setFirstname(messageFirstName);
    } else {
      messageFirstName = "";
      setisValidFirstName(true);
      setFirstname(messageFirstName);
      setFirstNameValue(e.target.value);
    }
  }

  //Valide l' input "mail"
  function validMail(e) {
    if (masqueMail.test(e.target.value) !== true) {
      messageMail = "Veuillez entrer un email valide";
      setisValidMail(false);
      setMail(messageMail);
    } else {
      messageMail = "";
      setisValidMail(true);
      setMail(messageMail);
      setEmailValue(e.target.value);
    }
  }

  //Valide le message utilisateur
  function validMessage(e) {
    if (masqueMessage.test(e.target.value) !== true) {
      messageMsg = "Nbr de carracteres incorrects ou carracteres non autorisés";
      setisValidMsg(false);
      setMsg(messageMsg);
    } else {
      messageMsg = "";
      setisValidMsg(true);
      setMsg(messageMsg);
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

  //Recharge la page sur l'url de base
  function reload() {
    let urlActive = window.location.href;
    let urlSplited = urlActive.split("/?")[0];
    document.location.href = urlSplited;
  }

  //permet de cacher le popup de validation du commentaire enregistré
  function hide(evt) {
    let parent = evt.parentElement;
    parent.classList.add(classHide);
    reload();
  }

  //recupere l' url courante
  function getUserUrl() {
    setUserUrlValue(window.location.href);
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
        submitForm(evt);
      }}
    >
      {isResponse ? (
        <div className="form__text-response">
          <p className="form__text">
            Répondre à {responseTo + " dont id est : " + responseIdTo}
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
          Vos suggestions serviront à améliorer notre service.
        </p>
      )}

      <div className="cont-label-input">
        <label className="form-label" htmlFor="lastname">
          Nom<span className="requis">*</span> <span> (Non publié)</span>
        </label>
        <input
          className={isValidLastName ? form_input + valid_border : form_input}
          type="text"
          name="lastname"
          id="lastname"
          min="2"
          max="20"
          placeholder="Entrez votre nom..."
          required
          onChange={function (evt) {
            validLastName(evt);
          }}
        />
      </div>
      <p
        className={
          isValidLastName ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {lastName}
      </p>
      <div className="cont-label-input">
        <label className="form-label" htmlFor="firstname">
          Prénom<span className="requis"> *</span>
        </label>
        <input
          className={isValidFirstName ? form_input + valid_border : form_input}
          type="text"
          name="firstname"
          id="firstname"
          min="2"
          max="20"
          placeholder="Entrez votre prénom..."
          required
          onChange={function (evt) {
            validFirstName(evt);
          }}
        />
      </div>
      <p
        className={
          isValidFirstName ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {firstName}
      </p>
      <div className="cont-label-input">
        <label className="form-label" htmlFor="email">
          Email<span className="requis"> *</span>
          <span>(Non publié)</span>
        </label>
        <input
          className={isValidMail ? form_input + valid_border : form_input}
          type="email"
          name="email"
          id="email"
          min="2"
          max="55"
          placeholder="Entrez votre email..."
          required
          onChange={function (evt) {
            validMail(evt);
          }}
        />
      </div>
      <p
        className={
          isValidMail ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {mail}
      </p>
      {isSessionOpen == true ? (
        <div className="container-checkbox">
          <label htmlFor="userdata">
            Se souvenir de moi pour un prochain commentaire, durant ma session.
          </label>
          <input
            type="checkbox"
            name="userdata"
            id="userdata"
            value="ok"
            checked 
            disabled
            
           
          />
        </div>
      ) : (
        <div className="container-checkbox">
          <label htmlFor="userdata">
            Se souvenir de moi pour un prochain commentaire, durant ma session.
          </label>
          <input
            type="checkbox"
            name="userdata"
            id="userdata"
            value="ok"
            onClick={function (evt) {
              validSessionUser(evt);
            }}
          />
        </div>
      )}

      <div className="cont-label-input">
        <label className="form-label" htmlFor="comment" min="2" max="200">
          Entrez votre texte...<span className="requis"> *</span>
        </label>
        <textarea
          className={isValidMsg ? textarea + valid_border_textarea : textarea}
          name="comment"
          id="comment"
          min="10"
          max="200"
          placeholder={contentPlaceHolder}
          required
          onChange={function (evt) {
            validMessage(evt);
          }}
        ></textarea>
      </div>
      <p
        className={
          isValidMsg ? form_flag + valid_text : form_flag + invalid_text
        }
      >
        {msg}
      </p>

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
          text="publier votre commentaire"
          colorbg="first"
          colortext="fifth"
          disabledButton={isdisabled}
        ></ButtonStd>
      </div>

      {isCommentStored === true ? (
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

      {isCommentStored === false ? (
        <div className="comment-stored unsave">
          <span className="comment-stored__text">Commentaire non publié</span>
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
    </form>
  );
}

export { Formulaire };
