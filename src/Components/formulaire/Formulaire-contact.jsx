//Composant "Formulaire"

//Import des hook
import { useEffect, useState, useRef } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire-contact.css";

//Import de la fonction qui soumet le formulaire au backend
import { submitFormContact } from "../../Utils/Function/formComment/requete/formContactSubmit";

//Import des fonctions

/****** fonction qui test une session user***** */
const testSession = require("../../Utils/Function/LocalStorage");

/******* fonction qui test et valide les inputs utilisateur *******/
const testInputUser = require("../../Utils/Function/testInputUser");

//Fonction "FormulaireContact"

function FormulaireContact() {
  
  /*********** hooks****************/

  /***************** useRef ********/

  //référencement des éléments "div" du DOM qui contiennent les messages d'erreur liés aux inputs user.
  const divErrorLastName = useRef();
  const divErrorFirstName = useRef();
  const divErrorEmail = useRef();
  const divErrorMessage = useRef();

  //Flag qui indique si l'input user est en defaut
  const FlagErrorUserLastName = useRef(true);
  const FlagErrorUserFirstName = useRef(true);
  const FlagErrorUserEmail = useRef(true);
  const FlagErrorUserMessage = useRef(true);

  /******************** useState ***/

  //Flag qui indique si le formulaire est valide pour soumission vers api
  const [isValidForm, setIsValidForm] = useState(false);

  /*** ******************* useEffect ***/
  
  //Permet de preremplir et de valider les inputs utilisateur, avec les donnees du client connecté.
  
  useEffect(() => {
    let isSession = testSession.setValueInputUser();
    if (isSession) {
      FlagErrorUserLastName.current = false;
      FlagErrorUserFirstName.current = false;
      FlagErrorUserEmail.current = false;

    }
  }, []);

  //Corps de la requette fetch pour soummission du formulaire
  let bodyrequest = {};

  //Variables contenant les messages d'erreur des differents inputs user
  const lastNameErrorMessage = "Veuillez entrer un 'nom' valide...";
  const firstNameErrorMessage = "Veuillez entrer un 'prénom' valide...";
  const emailErrorMessage = "Veuillez entrer un 'email' valide...";
  const textErrorMessage = "Veuillez entrer un 'text' valide...";

  //Declaration des fonctions

  /***Ajoute ou supprime la class CSS "hide" ****
   * arg1: fonction de test d' une input
   * arg2: valeur de l'attribut "ref" du div error correspondant à l'input
   * arg3: reference du flag d' erreur
   * return: void;
   */
  function hideOrDisplayDivError(testInput, divErrorRef, errorFlag) {
    if (testInput) {
      divErrorRef.current.classList.add("hide");
      errorFlag.current = false;
    } else {
      divErrorRef.current.classList.remove("hide");
      errorFlag.current = true;
    }

    console.log("etat du flag erreur: " + errorFlag.current);
  }

  /*** Test la validite du formulaire avant soumission des data ****
   * return: void;
   */
  function validFormContact() {
    //Control du pot de miel
    if (testInputUser.validSujet) {
      if (
        !FlagErrorUserLastName.current &&
        !FlagErrorUserFirstName.current &&
        !FlagErrorUserEmail.current &&
        !FlagErrorUserMessage.current
      ) {
        makeBodyrequest();
        console.log(bodyrequest);
        console.log("valeur de isValidForm: " + isValidForm);
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
        console.log("valeur de isValidForm: " + isValidForm);
      }
    }
  }

  function makeBodyrequest() {
    bodyrequest.lastname = document.forms["formContact"].lastname.value;
    bodyrequest.firstname = document.forms["formContact"].firstname.value;
    bodyrequest.email = document.forms["formContact"].email.value;
    bodyrequest.message = document.forms["formContact"].message.value;
  }

  //Class css des élements du DOM
  let form_input = "form-input";
  let form_flag = "form__flag";
  let textarea = " textarea";
  let valid_text = " valid-text";
  let valid_border = " valid-border";
  let valid_border_textarea = " valid-border-textarea";
  let invalid_text = " invalid-text";
  let invalid_border = " invalid-border";
  let classHide = "hide";

  return (
    <div className="form-contact">
      <form
        name="formContact"
        className="form"
        method="post"
        onSubmit={(evt) => {
          submitFormContact(evt, bodyrequest);
        }}
      >
        <div className="container-title">
          <div className="container-logo">
            <img
              className="form-logo"
              src="/Asset/logo/logo-electravaux-v2.svg"
              alt="logo"
            ></img>
          </div>
          <p className="form__title">Contactez nous...</p>
        </div>
        <p className="form__text">
          <br></br>
          Au vue d'un trop grand nombre de questions techniques sur la
          réalisation des travaux des internautes, nous ne pouvons donner suite
          à votre requête. Merci de votre compréhension.
        </p>

        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Nom<span className="requis">*</span>
            </p>
            <input
              className={form_input}
              type="text"
              name="lastname"
              min="2"
              max="30"
              placeholder="Votre nom..."
              required
              onChange={function (evt) {
                hideOrDisplayDivError(
                  testInputUser.validLastName(evt),
                  divErrorLastName,
                  FlagErrorUserLastName
                );
                validFormContact();
              }}
            />
          </label>
        </div>
        <div
          ref={divErrorLastName}
          className={form_flag + invalid_text + " " + classHide}
        >
          {lastNameErrorMessage}
        </div>
        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Prénom<span className="requis"> *</span>
            </p>
            <input
              className={form_input}
              type="text"
              name="firstname"
              min="2"
              max="30"
              placeholder="Votre prénom..."
              required
              onChange={function (evt) {
                hideOrDisplayDivError(
                  testInputUser.validFirstName(evt),
                  divErrorFirstName,
                  FlagErrorUserFirstName
                );
                validFormContact();
              }}
            />
          </label>
        </div>
        <div
          ref={divErrorFirstName}
          className={form_flag + invalid_text + " " + classHide}
        >
          {firstNameErrorMessage}
        </div>
        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Email<span className="requis"> *</span>
            </p>
            <input
              className={form_input}
              type="email"
              name="email"
              min="2"
              max="55"
              placeholder="Votre email..."
              required
              onChange={function (evt) {
                hideOrDisplayDivError(
                  testInputUser.validMail(evt),
                  divErrorEmail,
                  FlagErrorUserEmail
                );
                validFormContact();
              }}
            />
          </label>
        </div>
        <div
          ref={divErrorEmail}
          className={form_flag + invalid_text + " " + classHide}
        >
          {emailErrorMessage}
        </div>

        <div className="cont-label-input">
          <label className="form-label" min="2" max="200">
            <p className="text-label">
              Entrez votre texte...<span className="requis"> *</span>
            </p>
            <textarea
              className={textarea}
              name="message"
              min="10"
              max="300"
              required
              onChange={function (evt) {
                hideOrDisplayDivError(
                  testInputUser.validMessage(evt),
                  divErrorMessage,
                  FlagErrorUserMessage
                );
                validFormContact();
              }}
            ></textarea>
          </label>
        </div>
        <div
          ref={divErrorMessage}
          className={form_flag + invalid_text + " " + classHide}
        >
          {textErrorMessage}
        </div>
        <input type="hidden" name="sujet" />
        <div className="cont-valid-btn">
          <ButtonStd
            btntype="submit"
            mom="btn-submit"
            text="Envoyer votre message"
            colorbg="first"
            colortext="fifth"
            disabledButton={isValidForm ? "" : "disabled"}
          ></ButtonStd>
        </div>
      </form>
    </div>
  );
}

export { FormulaireContact };
