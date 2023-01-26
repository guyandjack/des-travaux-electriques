//Page Quiz

//Import des hooks
import { useState, useEffect } from "react";

//Import de la liste de questions du quiz "prise de courant et circuits dédiés"
import { ContentQuizPC } from "../../Data/ContentQuiz/ContentQuizPC/ContentQuizPC.jsx";

//Import des composants enfants

import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";
import { Title } from "../../Components/Title/Title.jsx";
import { QuizQuestion } from "../../Components/QuizQuestion/QuizQuestion.jsx";

//import des feuilles de style
import "../../Style/CSS/page_quiz_pc.css";

function PageQuizPC() {


  const [isvalid, setisvalid] = useState(false);

  const [userResponse, setUserResponse] = useState({});
  console.log("userresponse du la page quizz: " + userResponse.ur);
  console.log("goodresponse du la page quizz: " + userResponse.gr);
  console.log("id de la question: " + userResponse.id);

  const [userResponseArray, setUserResponseArray] = useState([]);

  //nombre total de question
  let numberTotalQuestion = ContentQuizPC.length;
  let resultNumber;

  //Apres chaque reponse du user on stock l id et le score dans le localstorage
  useEffect(() => {
    let resultQuestion = 0;
    
    let idQuestion = userResponse.id;
    console.log(idQuestion)

    //initialisation de l'objet de reponses
    let arrayUserResponses;

    //si la propriete userResponse n' existe pas
    if (!localStorage.getItem("userResponses")) {
      arrayUserResponses = {};
    } else {
      arrayUserResponses = JSON.parse(localStorage.getItem("userResponses"));
    }

    //test si la reponse du user est correct
    if(userResponse.ur && userResponse.gr){
      if (userResponse.ur === userResponse.gr) {
        resultQuestion = 1;
      }
    }

    //mise à jour du tableau avec la nouvelle reponse
    if (idQuestion !== undefined) {

      arrayUserResponses[idQuestion] = resultQuestion;
      console.log(arrayUserResponses);

      localStorage.setItem("userResponses", JSON.stringify(arrayUserResponses));
    }
  }, [userResponse]);

  function valideResponse(e) {
    console.log("bug de click");
    e.preventDefault();
    //let allQuestions = document.querySelectorAll("div.container-question");
    //console.log(allQuestions)

    /*allQuestions.forEach((question) => {
      let checkedResponse = question.querySelectorAll("input[type='radio']:checked").length;
      console.log(checkedResponse)
      if (checkedResponse < 1) {
        return
        
      }
      else {
        userResponseArray = JSON.parse(localStorage.getItem("userResponses"));
        console.log(userResponseArray);
        setisvalid(true);
      }

    })*/
  }

  return (
    <div className="quiz-pc">
      <div className="quiz-pc__title">
        <Title
          pagetype="page"
          title="quiz"
          text="Petit test de connaissance sur les prises électriques"
        ></Title>
      </div>

      <form className="quiz-pc__form">
        {ContentQuizPC.map((element, index) => {
          return (
            <div key={index}>
              <QuizQuestion
                idq={element.idQ}
                textQuestion={element.textQuestion}
                proposition1={element.proposition1}
                proposition2={element.proposition2}
                proposition3={element.proposition3}
                proposition4={element.proposition4}
                proposition5={element.proposition5}
                goodresponse={element.goodresponse}
                idinput={element.idQ + index}
                idlabel={element.idQ + index}
                responseUser={userResponse}
                setResponseUser={setUserResponse}
              />
            </div>
          );
        })}

        <ButtonStd
          btntype="button"
          text="Valider vos réponses"
          colorbg="first"
          colortext="fifth"
          onClick={(evt) => {valideResponse(evt)}}
        ></ButtonStd>
      </form>

      {isvalid ? (
        <div className="quiz-pc__resultat">
          <p className="quiz-pc__resultat__text">{"felicitation"}</p>

          <div className="quiz-pc__resultat__rate">
            {(resultNumber / numberTotalQuestion) * 100 + " %"}
          </div>
        </div>
      ) : (
        <p className="quiz-pc__error">
          Veuillez répondre à toute les questions!!!
        </p>
      )}
    </div>
  );
}

export { PageQuizPC };
