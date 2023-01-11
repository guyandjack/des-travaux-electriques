//Composant "Title"

//Import des feuilles de style
import "../../Style/CSS/title.css";


//Fonction "Title"

function Title({ pagetype, title, text }) {

    let classPageType = (pagetype === "home") ? ("title-home") : ("title-page");
    let classText = pagetype === "home" ? "text-home" : "text-page";
    
    
    return (
        <div className="title">
            
            <h1 className={classPageType}>{title}</h1>
            <p className={classText}>{text}</p>
            
        </div>
    )
}

export {Title}