//Composant "QuizQuestion"

//Import des feuilles de style
import "../../Style/SASS/components/quizquestion.scss";

//Function "QuizQuestion"

function QuizQuestion({ textQuestion, proposition1, proposition2, proposition3, proposition4, proposition5 }) {
    
    return (
        
        <div className="container-question">
            
            <p className="question">{textQuestion}</p>


            {proposition1? (<div className="proposition">
                <label htmlFor="q1" className="question__label">{proposition1}</label>
                <input id="q1" className="question__input" type="checkbox" name="q1"></input>
            </div>) : null}

            {proposition2? (<div className="proposition">
                <label htmlFor="q2" className="question__label">{proposition2}</label>
                <input id="q2" className="question__input" type="checkbox" name="q2"></input>
            </div>) : null}

            {proposition3? (<div className="proposition">
                <label htmlFor="q3" className="question__label">{proposition3}</label>
                <input id="q3" className="question__input" type="checkbox" name="q3"></input>
            </div>) : null}

            {proposition4? (<div className="proposition">
                <label htmlFor="q4" className="question__label">{proposition4}</label>
                <input id="q4" className="question__input" type="checkbox" name="q4"></input>
            </div>) : null}

            {proposition5? (<div className="proposition">
                <label htmlFor="q5" className="question__label">{proposition5}</label>
                <input id="q5" className="question__input" type="checkbox" name="q5"></input>
            </div>) : null}

           

        </div>
        
    )
}

export {QuizQuestion}
