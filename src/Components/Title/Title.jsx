//Composant "Title"

//Import des feuilles de style
import "../../Style/CSS/title.css";


//Fonction "Title"

function Title({ text, pagetype }) {

    let classList_1 = (pagetype === "home") ? ("title-home") : ("title-page");
    let classList_2 = " text";
    
    return (
      
        <span className={classList_1 + classList_2}>{text}</span>
      
    )
}

export {Title}