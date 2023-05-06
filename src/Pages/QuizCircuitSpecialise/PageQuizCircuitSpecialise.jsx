//Page Quiz-Circuit-Specialisé

//Import des hooks
import { useState, useEffect } from "react";

//Import du module link
import { Link } from "react-router-dom";

//Import de la liste de questions du quiz "prise de courant et circuits dédiés"
import { ContentQuizCircuitSpecialise } from "../../Data/ContentQuiz/ContentQuizCircuitSpecialise/ContentQuizCircuitSpecialise.jsx";

//Import des commentaires relatif aux resultats du quiz
import { commentResult } from "../../Data/ContentQuiz/CommentResult/CommentResult.js";

//Import des composants enfants

import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";
import { Title } from "../../Components/Title/Title.jsx";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion.jsx";
import { NavLink } from "../../Components/NavLink/NavLink.jsx";

//import des feuilles de style
import "../../Style/CSS/page_quiz_pc.css";

function PageQuizCircuitSpecialise() {
  /******************* declaration des constantes et variables **************** */

  const [isvalid, setisvalid] = useState(false);

  const [userResponse, setUserResponse] = useState({});

  const [messageError, setMessageError] = useState(false);

  const [userFinalResult, setUserFinalResult] = useState({});

  //nombre total de question
  let numberTotalQuestion = ContentQuizCircuitSpecialise.length;

  //tableau contenant la reponse du user à une question(idquestion, idproposition, userresponsevalue)
  let arrayUserResponses;

  /*********************déclaration des Functions unitaires de la logique du quiz***************************/

  //Enregistre un élémment dans le localStorage (ajout ou remplacement)

  function storeInLocalStorage(updateValue) {
    arrayUserResponses = getFromLocalStorge(
      "userResponsesQuizCircuitSpecialise"
    );
    console.log(arrayUserResponses);

    //check si une reponse a deja ete donnée
    let index = arrayUserResponses.findIndex(
      (element) => element.idq === updateValue.idq
    );

    //si oui la réponse existante est remplacé par la nouvelle
    if (index > -1) {
      arrayUserResponses.splice(index, 1, updateValue);
    }

    //Si non on ajoute la nouvelle valeur
    else {
      arrayUserResponses.push(updateValue);
    }

    //mise à jour des reponses dans le local storage
    localStorage.setItem(
      "userResponsesQuizCircuitSpecialise",
      JSON.stringify(arrayUserResponses)
    );
  }

  //Efface un element du local storage
  function deleteElementInLocalStorage(key) {
    if (!localStorage.getItem(key)) {
      return false;
    }

    localStorage.removeItem(key);
    return true;
  }

  //Recupère un élément du localStorage : (retourne un tableau ou un tableau vide)
  function getFromLocalStorge(key) {
    if (!localStorage.getItem(key)) {
      return [];
    }

    let array = JSON.parse(localStorage.getItem(key));
    return array;
  }

  /******* à faire apres chaque réponse de l' utilisateur *******/

  //determine la valeur de la reponse du user
  function responseValue() {
    // Initialisation de la réponse user à 0 (réponse fausse)
    let resultQuestion = "0";

    //Recuperation des donnees du statelocal apres chaque reponse selectionnée
    let idQuestion = userResponse.idq;
    let idInput = userResponse.idi;
    let userSelect = userResponse.ur;
    let rightResponse = userResponse.gr;

    //Test si les proprietees existent
    if (userSelect && rightResponse) {
      //Si la reponse du user est correct
      if (userSelect.toString() === rightResponse) {
        resultQuestion = "1";
      }
    }

    //mise à jour du tableau avec la nouvelle réponse
    if (idQuestion !== undefined) {
      let updateValue = {
        idq: idQuestion,
        idi: idInput,
        result: resultQuestion,
      };

      //enregistrement dans le local storage
      storeInLocalStorage(updateValue);
    }
  }

  /******** à faire à chaque rechargement de la page ***** */

  /*********Initialisation du quiz*********/

  //Initialisation du quiz
  function InitQuiz() {
    //si la propriete userResponseQuizPC n' existe pas on initialise avec un tableau vide
    if (!localStorage.getItem("userResponsesQuizCircuitSpecialise")) {
      arrayUserResponses = [];

      //si la propriete existe on initialise avec le tableau "userresponsesQuizPC" du local storage
    } else {
      arrayUserResponses = getFromLocalStorge(
        "userResponsesQuizCircuitSpecialise"
      );

      //on passe l' etat des inputs à "checked", cela mémorise les choix précédent du user
      InputUserChecked(arrayUserResponses);
    }
  }

  //Permet de restaurer le choix de l' utilisateur au rechargement de la page si le quiz n'est pas validé
  function InputUserChecked(arrayResponses) {
    if (arrayResponses.length > 0) {
      arrayResponses.forEach((userSelect) => {
        let input = document.getElementById(userSelect.idi);

        if (input !== null) {
          input.setAttribute("checked", "checked");
        }
      });
    }
  }

  /******* operation à réaliser après validation des réponses ********/

  //Contrôle si le user à répondu à toutes les questions:(retourne un boolean)
  //-1-

  function checkIfInputChecked() {
    let allQuestions = document.querySelectorAll("div.container-question");

    let nbrOfFlag = 0;

    for (let question of allQuestions) {
      let checkedResponse = question.querySelector(
        "input[type='radio']:checked"
      );

      if (checkedResponse === null) {
        question.classList.add("color-error");
        nbrOfFlag = nbrOfFlag - 1;
      } else {
        question.classList.remove("color-error");
        nbrOfFlag = nbrOfFlag + 1;
      }
    }

    return nbrOfFlag === numberTotalQuestion ? true : false;
  }

  // calcule le score du user :(retourne un nombre entier positif ou negatif)
  //-2-
  function calulateFinalScore(key) {
    arrayUserResponses = getFromLocalStorge(key);

    if (arrayUserResponses.length === 0) {
      return -1;
    }

    let score = 0;
    arrayUserResponses.forEach((response) => {
      score = score + parseInt(response.result, 10);
    });
    return score;
  }

  //Desactive tous les boutons radio non selectionnés
  //-3-
  function disabledAllInputs() {
    let AllInputs = document.querySelectorAll("input[type='radio']");
    let AllInputsChecked = document.querySelectorAll(
      "input[type='radio']:checked"
    );
    AllInputs.forEach((input) => {
      input.setAttribute("disabled", "true");
    });
    AllInputsChecked.forEach((input) => {
      input.removeAttribute("disabled");
    });
  }

  //Affiche le score et les commentaires :(retourne un commentaire et une class de style)
  //-4-
  function displayScore(userScore) {
    userFinalResult.finalResult = userScore;

    if (userScore < 1) {
      userFinalResult.textEval = commentResult.level1;
      userFinalResult.colorUserResult = " bad-result";
    }

    if (
      Math.round((userScore / numberTotalQuestion) * 100) < 25 &&
      Math.round((userScore / numberTotalQuestion) * 100) > 0
    ) {
      userFinalResult.textEval = commentResult.level2;
      userFinalResult.colorUserResult = " bad-result";
    }

    if (
      Math.round((userScore / numberTotalQuestion) * 100) >= 25 &&
      Math.round((userScore / numberTotalQuestion) * 100) < 50
    ) {
      userFinalResult.textEval = commentResult.level3;
      userFinalResult.colorUserResult = " bad-result";
    }

    if (
      Math.round((userScore / numberTotalQuestion) * 100) >= 50 &&
      Math.round((userScore / numberTotalQuestion) * 100) < 75
    ) {
      userFinalResult.textEval = commentResult.level4;
      userFinalResult.colorUserResult = " medium-result";
    }

    if (
      Math.round((userScore / numberTotalQuestion) * 100) >= 75 &&
      Math.round((userScore / numberTotalQuestion) * 100) < 100
    ) {
      userFinalResult.textEval = commentResult.level5;
      userFinalResult.colorUserResult = " good-result";
    }

    if (Math.round((userScore / numberTotalQuestion) * 100) === 100) {
      userFinalResult.textEval = commentResult.level6;
      userFinalResult.colorUserResult = " good-result";
    }

    console.log(userFinalResult);
    setUserFinalResult(userFinalResult);
  }

  /********fonctions globales********** */
  /************************************* */

  //permet le controle et l' afffichage du score final apres validation des reponses
  function valideResponse() {
    let flag = checkIfInputChecked();

    if (!flag) {
      setMessageError(true);
      return;
    }
    let finalScore = calulateFinalScore("userResponsesQuizCircuitSpecialise");

    disabledAllInputs();
    displayScore(finalScore);
    setMessageError(false);
    deleteElementInLocalStorage("userResponsesQuizCircuitSpecialise");
    setisvalid(true);
  }

  //Permet de relancer le quiz à zero.
  function resetQuiz(e) {
    e.preventDefault();
    localStorage.removeItem("userResponsesQuizCircuitSpecialise");
    window.location.reload();
  }

  //gestion des effets de board
  useEffect(() => {
    //Initialisation du quiz
    InitQuiz();

    //Créer un écouteur d' évenement sur le bouton valider reponse
    let btnValid = document.querySelector("button[type='button']");
    btnValid.addEventListener("click", (evt) => {
      valideResponse();
    });

    //determine la valeur de la réponse du user
    responseValue();
  }, [userResponse]);

  return (
    <div className="quiz">
      <div className="container-link-back">
        <NavLink
          urlTo="/schema/circuit-specialise"
          urlImg=""
          text="← Schéma Circuits-Specialisés"
          tailleText="1.2em"
          colorText="fourth"
          colorBg=""
        ></NavLink>
      </div>
      <div className="quiz__title">
        <Title
          pagetype="page"
          title="quiz"
          text="« Petit test de connaissance sur les circuits spécialisés »"
          urlimg="/Asset/images_page_circuit_specialise/lave-linge/img-lave-linge.png"
        ></Title>
      </div>

      <form className="quiz__form">
        {ContentQuizCircuitSpecialise.map((element, index) => {
          return (
            <div key={index} className="quiz__form__question">
              <QuizQuestion
                contentQuiz={ContentQuizCircuitSpecialise}
                indexQuestion={index}
                numberQuestion={index + 1}
                idquestion={element.idQ}
                textQuestion={element.textQuestion}
                proposition1={element.proposition1}
                proposition2={element.proposition2}
                proposition3={element.proposition3}
                proposition4={element.proposition4}
                proposition5={element.proposition5}
                goodresponse={element.goodresponse}
                textSolution={element.textSolution}
                idinput1={element.idQ + "-" + index + "-1"}
                idinput2={element.idQ + "-" + index + "-2"}
                idinput3={element.idQ + "-" + index + "-3"}
                idinput4={element.idQ + "-" + index + "-4"}
                idinput5={element.idQ + "-" + index + "-5"}
                responseUser={userResponse}
                setResponseUser={setUserResponse}
                valid={isvalid}
                setValid={setisvalid}
              />
            </div>
          );
        })}

        {!isvalid ? (
          <ButtonStd
            btntype="button"
            text="Valider vos réponses"
            colorbg="first"
            colortext="fifth"
          ></ButtonStd>
        ) : null}

        {isvalid ? (
          <div className="quiz__resultat">
            <div
              className={
                "quiz__resultat__rate" + `${userFinalResult.colorUserResult}`
              }
            >
              {"Votre score est de : "}
              {userFinalResult.finalResult >= 1
                ? Math.round(
                    (userFinalResult.finalResult / numberTotalQuestion) * 100
                  ) + " %"
                : " 0 %"}
            </div>
            <div>
              <p>{userFinalResult.textEval}</p>
            </div>

            <div
              className="quiz__resultat__btn-reset"
              onClick={(evt) => {
                resetQuiz(evt);
              }}
            >
              <ButtonStd
                btntype="reset"
                name="resetquiz"
                text="Relancer le quiz"
                colorbg="third"
                colortext="fifth"
              ></ButtonStd>
            </div>
          </div>
        ) : null}

        {messageError ? (
          <p className="quiz__error">
            Veuillez répondre à toute les questions!!!
          </p>
        ) : null}
      </form>
      <div className="container-link-back">
        <NavLink
          urlTo="/schema/circuit-specialise"
          urlImg=""
          text="← Schéma Circuits-Specialisés"
          tailleText="1.2em"
          colorText="fourth"
          colorBg=""
        ></NavLink>
      </div>
    </div>
  );
}

export { PageQuizCircuitSpecialise };
