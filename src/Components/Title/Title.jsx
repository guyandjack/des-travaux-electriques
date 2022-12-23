//Composant "Title"



//Import des feuilles de style
import "../../Style/CSS/title.css";


//Fonction "Title"

function Title({ title, pagetype }) {

    let classList = (pagetype === "home")? ("title-home"): ("title-page")

    return (
        <h1 className={classList}>{ title }</h1>
    )
}

export {Title}