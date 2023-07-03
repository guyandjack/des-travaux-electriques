//Composant "Formulaire"

//Import des hook
import { useEffect, useState, useRef } from "react";

//Import des composants enfants
import { ButtonStd } from "../ButtonStd/ButtonStd";

//Import des feuille de style
import "../../Style/CSS/formulaire-contact.css";

//Import des fonctions

/****** fonction qui test une session user***** */
const testSession = require("../../Utils/Function/LocalStorage");

/******* fonction qui test et valide les inputs utilisateur *******/
const testInputUser = require("../../Utils/Function/testInputUser");

//Fonction "FormulaireContact"

function FormulaireContact() {
  /*********** hooks****************/
  //UseRef

  //référencement des elements "input" du formulaire
  const inputLastName = useRef();
  const inputFirstName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();

  //référencement des éléments "p" qui contiennent les messages d'erreur liés aux inputs user.
  const pContentErrorLastName = useRef();
  const pContentErrorFirstName = useRef();
  const pContentErrorEmail = useRef();
  const pContentErrorMessage = useRef();

  //UseState
  const [isValidForm, setIsValidForm] = useState("disabled");

  //Variables contenant les messages d'erreur des differents inputs user
  const lastNameErrorMessage = "Veuillez entrer un 'nom' valide...";
  const firstNameErrorMessage = "Veuillez entrer un 'prénom' valide...";
  const emailErrorMessage = "Veuillez entrer un 'email' valide...";
  const textErrorMessage = "Veuillez entrer un 'text' valide...";

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

  //Corps de la requette fetch pour soummission du formulaire
  let bodyrequest = {};

  /********************* declaration des fonctions ************************ */

  //realise une requete "fetch" lors de la soummission du formulaire.
  function submitForm(e) {
    //evite la soumission automatique du formulaire
    e.preventDefault();

    fetch("http://www.electravaux.com/api/contact", {
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyrequest),
    })
      .then((response) => response.json())
      .then((data) => JSON.stringify(data))

      .catch((error) => console.log(error));
  }

  return (
    <div className="form-contact">
      <form
        className="form"
        method="post"
        onSubmit={(evt) => {
          submitForm(evt);
        }}
      >
        {/*<div className="container-img-bg">
                  <img className="bg-form" src="/Asset/bg-form-contact.svg" alt="back ground"></img>
              </div>*/}
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
          Aux vues d'un trop grand nombre de questions techniques sur la
          réalisation des travaux des internautes, nous ne pouvons donner suite
          à votre requete. Merci de votre compréhension.
        </p>

        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Nom<span className="requis">*</span>
            </p>
            <input
              ref={inputLastName}
              className={form_input}
              type="text"
              name="lastname"
              min="2"
              max="20"
              placeholder="Votre nom..."
              required
              onChange={function (evt) {
                let isValidLastName = testInputUser.validLastName(evt);
                if (isValidLastName) {
                  pContentErrorLastName.current.classList.add("hide");
                } else {
                  pContentErrorLastName.current.classList.remove("hide");
                }
                testInputUser.validForm(
                  inputLastName.current.value,
                  inputFirstName.current.value,
                  inputEmail.current.value,
                  inputMessage.current.value,
                  setIsValidForm
                );
              }}
            />
          </label>
        </div>
        <p
          ref={pContentErrorLastName}
          className={form_flag + invalid_text + " " + classHide}
        >
          {lastNameErrorMessage}
        </p>
        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Prénom<span className="requis"> *</span>
            </p>
            <input
              ref={inputFirstName}
              className={form_input}
              type="text"
              name="firstname"
              min="2"
              max="20"
              placeholder="Votre prénom..."
              required
              onChange={function (evt) {
                let isValidFirstName = testInputUser.validFirstName(evt);
                if (isValidFirstName) {
                  pContentErrorFirstName.current.classList.add("hide");
                } else {
                  pContentErrorFirstName.current.classList.remove("hide");
                }
                testInputUser.validForm(
                  inputLastName.current.value,
                  inputFirstName.current.value,
                  inputEmail.current.value,
                  inputMessage.current.value,
                  setIsValidForm
                );
              }}
            />
          </label>
        </div>
        <p
          ref={pContentErrorFirstName}
          className={form_flag + invalid_text + " " + classHide}
        >
          {firstNameErrorMessage}
        </p>
        <div className="cont-label-input">
          <label className="form-label">
            <p className="text-label">
              Email<span className="requis"> *</span>
            </p>
            <input
              ref={inputEmail}
              className={form_input}
              type="email"
              name="email"
              min="2"
              max="55"
              placeholder="Votre email..."
              required
              onChange={function (evt) {
                let isValidEmail = testInputUser.validMail(evt);
                if (isValidEmail) {
                  pContentErrorEmail.current.classList.add("hide");
                } else {
                  pContentErrorEmail.current.classList.remove("hide");
                }
                testInputUser.validForm(
                  inputLastName.current.value,
                  inputFirstName.current.value,
                  inputEmail.current.value,
                  inputMessage.current.value,
                  setIsValidForm
                );
              }}
            />
          </label>
        </div>
        <p
          ref={pContentErrorEmail}
          className={form_flag + invalid_text + " " + classHide}
        >
          {emailErrorMessage}
        </p>

        <div className="cont-label-input">
          <label className="form-label" min="2" max="200">
            <p className="text-label">
              Entrez votre texte...<span className="requis"> *</span>
            </p>
            <textarea
              ref={inputMessage}
              className={textarea}
              name="comment"
              min="10"
              max="200"
              required
              onChange={function (evt) {
                let isValidMessage = testInputUser.validMessage(evt);
                if (isValidMessage) {
                  pContentErrorMessage.current.classList.add("hide");
                } else {
                  pContentErrorMessage.current.classList.remove("hide");
                }
                testInputUser.validForm(
                  inputLastName.current.value,
                  inputFirstName.current.value,
                  inputEmail.current.value,
                  inputMessage.current.value,
                  setIsValidForm
                );
              }}
            ></textarea>
          </label>
        </div>
        <p
          ref={pContentErrorMessage}
          className={form_flag + invalid_text + " " + classHide}
        >
          {textErrorMessage}
        </p>

        <div className="cont-valid-btn">
          <ButtonStd
            btntype="submit"
            mom="btn-submit"
            text="Envoyer votre message"
            colorbg="first"
            colortext="fifth"
            disabledButton={isValidForm === "disabled" ? "disabled" : ""}
          ></ButtonStd>
        </div>
      </form>
    </div>
  );
}

export { FormulaireContact };
