//Composant "IntroductionText"

//Import des feuilles de style
import "../../Style/CSS/intro-text.css";

//Fonction "IntroText"

function IntroText({content}) {
    
      return (
            <div className="intro-text">{content}</div>
      )
   
}

export {IntroText}
