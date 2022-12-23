//Composant "Collapse"

//Import des "hooks"
import { useState, useEffect } from "react";


//Import des feuilles de style
import "../../Style/CSS/collapse.css";


//Function "Collapse"

function Collapse({ idCollapse, title, content, color }) {

    const [isCliked, setIsCliked] = useState(null);
    
    useEffect(() => {
        let collapseTitle = document.getElementById(`${idCollapse}`);
        collapseTitle.addEventListener("click", function () { setIsCliked(!isCliked) });
    }, [isCliked]);

    let defaultClassContent = "collapse__content";
    let defaultClassTitle = "collapse__title";
    let addClass;
    let colorClass;

    if (isCliked === null) {
        addClass = "";
    }

    if (isCliked === true) {
        addClass = " display";
    }

    if (isCliked === false) {
        addClass = " hide";
    }

    if (color === "first") {
        colorClass = " first-color";
    }
    if (color === "second") {
        colorClass = " second-color";
    }
    if (color === "third") {
        colorClass = " third-color";
    }
    if (color === "fourth") {
        colorClass = " fourth-color";
    }

    return (
        <div className="collapse">
            
            <div id={idCollapse} className={defaultClassTitle + colorClass}>
                {title}
                <img className="chevron" src="" alt=""></img>
            </div>
            <div className={defaultClassContent + addClass + colorClass}>{content}</div>

        </div>
    );
}

export {Collapse}