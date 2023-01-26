//Composant "QuizQuestion"

//Import des hooks
import { useState, useEffect } from "react";

//Import de la liste de questions du quiz "prise de courant et circuits dédiés"
import { ContentQuizPC } from "../../Data/ContentQuiz/ContentQuizPC/ContentQuizPC.jsx";

//Import des feuilles de style
import "../../Style/CSS/quizquestion.css";

//Function "QuizQuestion"

function QuizQuestion({
  idq,
  textQuestion,
  proposition1,
  proposition2,
  proposition3,
  proposition4,
  proposition5,
  goodresponse,
  idinput,
  idlabel,
  responseUser,
  setResponseUser,
}) {
  return (
    <div className="container-question">
      <p className="question">{textQuestion}</p>

      {proposition1 ? (
        <div className="proposition">
          <label htmlFor={idlabel} className="question__label">
            {proposition1}
          </label>
          <input
            id={idinput}
            className="question__input"
            type="radio"
            name={idinput}
            value={proposition1}
            onClick={(evt) => {
                setResponseUser({
                  id: `${idq}`,
                  ur: `${evt.target.value}`,
                  gr: `${goodresponse}`,
                });
              console.log("id question du quizquestion");
            }}
          ></input>
        </div>
      ) : null}

      {proposition2 ? (
        <div className="proposition">
          <label htmlFor={idlabel} className="question__label">
            {proposition2}
          </label>
          <input
            id={idinput}
            className="question__input"
            type="radio"
            name={idinput}
            value={proposition2}
            onClick={(evt) => {
              setResponseUser({
                id: `${idq}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
              console.log(evt.target.value);
            }}
          ></input>
        </div>
      ) : null}

      {proposition3 ? (
        <div className="proposition">
          <label htmlFor={idlabel} className="question__label">
            {proposition3}
          </label>
          <input
            id={idinput}
            className="question__input"
            type="radio"
            name={idinput}
            value={proposition3}
            onClick={(evt) => {
              setResponseUser({
                id: `${idq}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
              console.log(evt.target.value);
            }}
          ></input>
        </div>
      ) : null}

      {proposition4 ? (
        <div className="proposition">
          <label htmlFor={idlabel} className="question__label">
            {proposition4}
          </label>
          <input
            id={idinput}
            className="question__input"
            type="radio"
            name={idinput}
            value={proposition4}
            onClick={(evt) => {
              setResponseUser({
                id: `${idq}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
              console.log(evt.target.value);
            }}
          ></input>
        </div>
      ) : null}

      {proposition5 ? (
        <div className="proposition">
          <label htmlFor={idlabel} className="question__label">
            {proposition5}
          </label>
          <input
            id={idinput}
            className="question__input"
            type="radio"
            name={idinput}
            value={proposition5}
            onClick={(evt) => {
              setResponseUser({
                id: `${idq}`,
                ur: `${evt.target.value}`,
                gr: `${goodresponse}`,
              });
              console.log(evt.target.value);
            }}
          ></input>
        </div>
      ) : null}
    </div>
  );
}

export { QuizQuestion };
