//Composant "Formulaire"

//Import des hook
import { useEffect, useState } from "react";

//Import des feuille de style

//Fonction "Formulaire"

function Formulaire() {
  let messageLastName = "";
  let messageFirstName = "";
  let messageMail = "";
  let messageMsg = "";

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
  //suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe 2 et 10 carracteres
  //suivi d' un point
  //suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
  let masqueMail =
    /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,15}\.[0-9a-zA-Z_'.-]{2,15}$/;

  //Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, et underscore de 10 a 200 caracteres
  let masqueMessage = /^[0-9A-Za-z_'.-]{10,200}$/;

  //Valide l' input "lastName"
  function validLastName(e) {
    if (masqueText.test(e.target.value) !== true || e.target.value.length < 2) {
      messageLastName = "veuillez entrer un nom valide";
      setisValidLastName(false);
      setLastname(messageLastName);
    } else {
      messageLastName = "Champ validé";
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
      messageFirstName = "Champ validé";
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
      messageMail = "Champ validé";
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
      messageMsg = "Champ validé";
      setisValidMsg(true);
      setMsg(messageMsg);
    }
  }

  return (
    <form className="form" method="post" action="validation-form.js">
      <p className="form-text">
        Veuillez remplir tous les champs pour l' envoi de votre message
      </p>

      <label className="form__label" htmlFor="lastname">
        Nom
      </label>
      <input
        className="form__input"
        type="text"
        name="lastname"
        id="lastname"
        min="2"
        max="20"
        required
        onChange={function (evt) {
          validLastName(evt);
        }}
      />
      <p className="form-valid lastname">{lastName}</p>

      <label className="form__label" htmlFor="firstname">
        Prénom
      </label>
      <input
        className="form__input"
        type="text"
        name="firstname"
        id="firstname"
        min="2"
        max="20"
        onChange={function (evt) {
          validFirstName(evt);
        }}
      />
      <p className="form-valid firstname">{firstName}</p>

      <label className="form__label" htmlFor="email">
        e-mail
      </label>
      <input
        className="form__input"
        type="email"
        name="email"
        id="email"
        min="2"
        max="40"
        onChange={function (evt) {
          validMail(evt);
        }}
      />
      <p className="form-valid email">{mail}</p>

      <label className="form__label" htmlFor="message" min="2" max="200">
        Votre message
      </label>
      <textarea
        className="form__input"
        name="message"
        id="message"
        onChange={function (evt) {
          validMessage(evt);
        }}
      ></textarea>
      <p className="form-valid message">{msg}</p>

      {isValidButton ? (
        <input className="form__input" type="submit" value="Envoyer" />
      ) : (
        <input className="form__input" type="submit" value="Envoyer" disabled />
      )}
    </form>
  );
}

export { Formulaire };
