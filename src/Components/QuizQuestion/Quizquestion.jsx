//Composant "QuizQuestion"

//Import des hooks
import { useState, useEffect } from "react";

//Import de la liste de questions du quiz "prise de courant et circuits dédiés"
import { ContentQuizPC } from "../../Data/ContentQuiz/ContentQuizPC/ContentQuizPC.jsx";

//Import des feuilles de style
import "../../Style/CSS/quizquestion.css";

//Function "QuizQuestion"

function QuizQuestion({
  numberQuestion,
  idquestion,
  textQuestion,
  proposition1,
  proposition2,
  proposition3,
  proposition4,
  proposition5,
  goodresponse,
  textSolution,
  idinput1,
  idinput2,
  idinput3,
  idinput4,
  idinput5,

  responseUser,
  setResponseUser,
  valid,
  setValid,
}) {

    // Url des icons de validations des questions
    let validIcon = "/Asset/icon/validright/valid-icon.svg";
    let invalidIcon = "/Asset/icon/validwrong/invalid-icon.svg";
    
    
  return (
    <div className="container-question">
      <div className="question-header">
        <div className="question-header__title">
          Question{" " + numberQuestion}
        </div>
        <div className="question-header__split"></div>
        <div className="question-header__text">{textQuestion}</div>
      </div>

      {proposition1 ? (
        <div className="proposition">
          <label htmlFor={idinput1} className="proposition__label">
            {proposition1}
          </label>
          <input
            id={idinput1}
            className="proposition__input"
            type="radio"
            name={textQuestion}
            value={proposition1}
            onClick={(evt) => {
              setResponseUser({
                idq: `${idquestion}`,
                idi: `${idinput1}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
            }}
          ></input>
          <div>
            {proposition1 === ContentQuizPC[0].goodresponse  ? (
              <img className="icon-result" src={validIcon} alt=""></img>
            ) : null}
            {proposition1 !== ContentQuizPC[0].goodresponse  ? (
              <img className="icon-result" src={invalidIcon} alt=""></img>
            ) : null}
          </div>
        </div>
      ) : null}

      {proposition2 ? (
        <div className="proposition">
          <label htmlFor={idinput2} className="proposition__label">
            {proposition2}
          </label>
          <input
            id={idinput2}
            className="proposition__input"
            type="radio"
            name={textQuestion}
            value={proposition2}
            onClick={(evt) => {
              setResponseUser({
                idq: `${idquestion}`,
                idi: `${idinput2}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
            }}
          ></input>
          <div>
            {proposition2 == ContentQuizPC[1].goodresponse ? (
              <img className="icon-result" src={validIcon} alt=""></img>
            ) : null}
            {proposition2 !== ContentQuizPC[1].goodresponse ? (
              <img className="icon-result" src={invalidIcon} alt=""></img>
            ) : null}
          </div>
        </div>
      ) : null}

      {proposition3 ? (
        <div className="proposition">
          <label htmlFor={idinput3} className="proposition__label">
            {proposition3}
          </label>
          <input
            id={idinput3}
            className="proposition__input"
            type="radio"
            name={textQuestion}
            value={proposition3}
            onClick={(evt) => {
              setResponseUser({
                idq: `${idquestion}`,
                idi: `${idinput3}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
            }}
          ></input>
          <div>
            {proposition3 === ContentQuizPC[2].goodresponse  ? (
              <img className="icon-result" src={validIcon} alt=""></img>
            ) : null}
            {proposition3 !== ContentQuizPC[2].goodresponse ? (
              <img className="icon-result" src={invalidIcon} alt=""></img>
            ) : null}
          </div>
        </div>
      ) : null}

      {proposition4 ? (
        <div className="proposition">
          <label htmlFor={idinput4} className="proposition__label">
            {proposition4}
          </label>
          <input
            id={idinput4}
            className="proposition__input"
            type="radio"
            name={textQuestion}
            value={proposition4}
            onClick={(evt) => {
              setResponseUser({
                idq: `${idquestion}`,
                idi: `${idinput4}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
            }}
          ></input>
          <div>
            {proposition4 === ContentQuizPC[3].goodresponse  ? (
              <img className="icon-result" src={validIcon} alt=""></img>
            ) : null}
            {proposition4 !== ContentQuizPC[3].goodresponse  ? (
              <img className="icon-result" src={invalidIcon} alt=""></img>
            ) : null}
          </div>
        </div>
      ) : null}

      {proposition5 ? (
        <div className="proposition">
          <label htmlFor={idinput5} className="proposition__label">
            {proposition5}
          </label>
          <input
            id={idinput5}
            className="proposition__input"
            type="radio"
            name={textQuestion}
            value={proposition5}
            onClick={(evt) => {
              setResponseUser({
                idq: `${idquestion}`,
                idi: `${idinput5}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
            }}
          ></input>
          <div>
            {proposition5 === ContentQuizPC[4].goodresponse ? (
              <img className="icon-result" src={validIcon} alt=""></img>
            ) : null}
            {proposition5 !== ContentQuizPC[4].goodresponse ? (
              <img className="icon-result" src={invalidIcon} alt=""></img>
            ) : null}
          </div>
        </div>
      ) : null}

      {valid ? (
        <div className="solution">
          <p className="solution__title">solution:</p>
          <p className="solution__text">{textSolution}</p>
        </div>
      ) : null}
    </div>
  );
}

export { QuizQuestion };
