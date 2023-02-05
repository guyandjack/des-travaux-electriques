//Composant "Formulaire"

//Import des hook
import { useEffect, useState } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire.css";

//Fonction "Formulaire"

function Formulaire() {
  //Class css des élements du DOM
  let form_input = "form-input";
  let form_flag = "form__flag";
  let textarea = " textarea";
  let valid_text = " valid-text";
  let valid_border = " valid-border";
  let valid_border_textarea = " valid-border-textarea";
  let invalid_text = " invalid-text";
  let invalid_border = " invalid-border";

  let messageLastName = "";
  let messageFirstName = "";
  let messageMail = "";
  let messageMsg = "";
  let contentPlaceHolder =
    "Vos commentaires, critiques et suggestions permetrons d'améliorer l' expérience utilisateur de nos futurs visiteurs";

  const [lastName, setLastname] = useState(messageLastName);
  const [firstName, setFirstname] = useState(messageFirstName);
  const [mail, setMail] = useState(messageMail);
  const [msg, setMsg] = useState(messageMsg);

  const [isValidLastName, setisValidLastName] = useState(false);
  const [isValidFirstName, setisValidFirstName] = useState(false);
  const [isValidMail, setisValidMail] = useState(false);
  const [isValidMsg, setisValidMsg] = useState(false);

  const [isValidButton, setIsValidButton] = useState(false);

  //valide le button submit en fonctionon de l'etat des inputs utilisateur
  useEffect(() => {
    if (
      isValidLastName === true &&
      isValidFirstName === true &&
      isValidMail === true &&
      isValidMsg === true
    ) {
      setIsValidButton(true);
    } else {
      setIsValidButton(false);
    }
  });

  //Motif qui autorise lettres majuscules et minuscules uniquement
  let masqueText = /^[A-Za-z_'.-]{2,20}$/;

  //Motif qui autorise une adresse mail qui peut commencer par:
  //0 ou 4 chiffres
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
  //suivi d' un arobase
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
  //suivi d' un point
  //suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
  let masqueMail =
    /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,15}\.[0-9a-zA-Z_'.-]{2,15}$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, et underscore de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-;,:]{10,200}$/;

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
    }
  }

  //Valide l' input "firstName"
  function validFirstName(e) {
    if (masqueText.test(e.target.value) !== true || e.target.value.length < 2) {
      messageFirstName = "Veuillez entrer un prénom valide";
      setisValidFirstName(false);
      setFirstname(messageFirstName);
    } else {
      messageFirstName = "";
      setisValidFirstName(true);
      setFirstname(messageFirstName);
    }
  }

  //Valide l' input "mail"
  function validMail(e) {
    if (masqueMail.test(e.target.value) !== true || e.target.value.length < 5) {
      messageMail = "Veuillez entrer un email valide";
      setisValidMail(false);
      setMail(messageMail);
    } else {
      messageMail = "";
      setisValidMail(true);
      setMail(messageMail);
    }
  }

  //Valide le message utilisateur
  function validMessage(e) {
    if (
      masqueMessage.test(e.target.value) !== true ||
      e.target.value.length < 10 ||
      e.target.value.length > 200
    ) {
      messageMsg = "Nbr de carracteres incorrects ou carractere non autorisé";
      setisValidMsg(false);
      setMsg(messageMsg);
    } else {
      messageMsg = "";
      setisValidMsg(true);
      setMsg(messageMsg);
    }
  }

  return (
    <form className="form" method="post" action="validation-form.js">
      <p className="form__text">
        Suite à un nombre important de questions techniques sur l'electricité,
        <br></br>
        nous ne pouvons donner suite à vos messages.<br></br>
        Néanmoins toutes vos sugestions et critiques serviront à améliorer notre
        service.
      </p>

      <div className="cont-label-input">
        <label className="form-label" htmlFor="lastname">
          Nom
        </label>
        <input
          className={
            isValidLastName
              ? form_input + valid_border
              : form_input 
          }
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
          Prénom
        </label>
        <input
          className={
            isValidFirstName
              ? form_input + valid_border
              : form_input 
          }
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
          Email
        </label>
        <input
          className={
            isValidMail
              ? form_input + valid_border
              : form_input 
          }
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

      <div className="cont-label-input">
        <label className="form-label" htmlFor="message" min="2" max="200">
          Entrez votre texte...
        </label>
        <textarea
          className={isValidMsg ? textarea + valid_border_textarea : textarea}
          name="message"
          id="message"
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

      {isValidButton ? (
        <div className="cont-valid-btn">
          <ButtonStd
            btntype="submit"
            mom="btn-submit"
            text="envoyer"
            colorbg="first"
            colortext="fifth"
            ></ButtonStd>
        </div>
      ) : null}
    </form>
  );
}

export { Formulaire };
