//Composant "Title"



//Import des feuilles de style
import "../../Style/CSS/title.css";


//Fonction "Title"

function Title({ text, text_2, text_3, pagetype }) {

    let classList = (pagetype === "home")? ("title-home"): ("title-page")

    return (
                    
        <h1 className={classList}>
            <p>{text}</p>
            <p>{text_2}</p>
            <p>{text_3}</p>
        </h1>
       
    )
}

export {Title}