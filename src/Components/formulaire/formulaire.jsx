//Composant "Formulaire"

//Import des hook
import { useEffect, useState } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire.css";

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

  const [userUrl, setUserUrl] = useState();

  //Boolean qui indique la validité des champs du formulaire
  const [isValidLastName, setisValidLastName] = useState(false);
  const [isValidFirstName, setisValidFirstName] = useState(false);
  const [isValidMail, setisValidMail] = useState(false);
  const [isValidMsg, setisValidMsg] = useState(false);

  const [isdisabled, setIsDisabled] = useState("disabled");
  const [isCommentStored, setIsCommentStored] = useState();
  const [isValidButton, setIsValidButton] = useState(false);
  
  //Valeur des inputs "nom", "prenom", "email" issues du formulaire
  const [lastNameValue, setLastnameValue] = useState();
  const [firstNameValue, setFirstNameValue] = useState();
  const [emailValue, setEmailValue] = useState();

  //recupere l' url courante
  function getUserUrl() {
    setUserUrl(window.location.href);
  }

  //effet de bord qui recupere un flag du derveur suite à l' enregistrement reussi d'un commentaire
  useEffect(() => {});

  //valide le button submit en fonction de l'etat des inputs utilisateur
  useEffect(() => {
    getUserUrl();

    //validation de l' envoi du commentaire
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);

    if (params.has("comment")) {
      let commentValue = params.get("comment");

      if (commentValue === "unsaved") {
        setIsCommentStored(false);
      }

      if (commentValue === "saved") {
        setIsCommentStored(true);
      }
    }

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

  //Attribut des valeurs par defaut dans les input utilisateurs
  useEffect(() => {

    if (localStorage.getItem("userData") !== null) {
      
      let dataUser = JSON.parse(localStorage.getItem("userData"));

      let listInputName = document.querySelectorAll("input[name=lastname]");
     
      let listInputFirstName = document.querySelectorAll("input[name=firstname]");

      let listInputEmail = document.querySelectorAll("input[name=email]");

      listInputName.forEach((inputName => {

        inputName.value = dataUser.userLastname;
        //inputName.placeholder = dataUser.userLastname;

      }))

      listInputFirstName.forEach((inputFirstName) => {
        inputFirstName.value = dataUser.userFirstname;
        //inputName.placeholder = dataUser.userLastname;
      });

      listInputEmail.forEach((inputEmail) => {
        inputEmail.value = dataUser.userEmail;
        //inputName.placeholder = dataUser.userLastname;
      });

    }
  },[])
  

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
      setLastnameValue(e.target.value)
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
    }
  }

  //Enregistre les donnees utilisateurs dans le local session
  function storeUserDataInLocalSession(e) {

    if (e.target.checked && isValidButton == true) {
      let dataUser = {
        userLastname : lastNameValue ,
        userFirstname : firstNameValue,
        userEmail : emailValue,
      }
      localStorage.setItem("userData", JSON.stringify(dataUser));

    }

    if (!e.target.checked && isValidButton == true) {
      localStorage.removeItem("userData");
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
      action="http://localhost:3500/api/comment"
    >
      {isResponse ? (
        <div className="form__text-response">
          <p className="form__text">Répondre à {responseTo + " dont id est : " + responseIdTo}</p>
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
          Nom<span className="requis"> *</span> <span> (Non publié)</span>
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
          <span> (Non publié)</span>
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
      <div className="container-checkbox">
        <label htmlFor="userdata">
          Se souvenir de moi pour un prochain commentaire, durant ma session.
        </label>
        <input type="checkbox" name="userdata" id="userdata" value="ok" onClick={function (evt) {
            storeUserDataInLocalSession(evt);
          }} />
      </div>

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

      <input type="hidden" name="userurl" value={userUrl} />
      <input type="hidden" name="pageref" value={pageRef} />
      <input type="hidden" name="isresponse" value={isResponse} />
      {isResponse == 1 ? (
        <input type="hidden" name="originalcommentid" value={responseIdTo} />
      ) : (
        null
      )}

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
