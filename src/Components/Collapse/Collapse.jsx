//Composant "Collapse"

//Import des "hooks"
import { useState, useEffect } from "react";


//Import des feuilles de style
import "../../Style/CSS/collapse.css";


//Function "Collapse"

function Collapse({ idCollapse, title, content, color }) {

    const [isCliked, setIsCliked] = useState(false);
    
    useEffect(() => {
        let collapseTitle = document.getElementById(`${idCollapse}`);
        collapseTitle.addEventListener("click", function () { setIsCliked(!isCliked) });
    }, [isCliked]);

    //Class de style des elements
    let defaultClassContent = "collapse__content";
    let defaultClassTitle = "collapse__title";
    let addClass;
    let colorClassTitle;
    let colorClassContent;

    //url des images

   

    if (isCliked === true) {
        addClass = " display";
    }

    if (isCliked === false) {
        addClass = " hide";
    }

    if (color === "first") {
        colorClassTitle = " first-color-title";
        colorClassContent = " first-color-content";
    }
    if (color === "second") {
        colorClassTitle = " second-color-title";
        colorClassContent = " second-color-content";
    }
    if (color === "third") {
        colorClassTitle = " third-color-title";
        colorClassContent = " third-color-content";
    }
    if (color === "fourth") {
        colorClassTitle = " fourth-color-title";
        colorClassContent = " fourth-color-content";
    }

    return (
        <div className="collapse">
            
            <div id={idCollapse} className={defaultClassTitle + colorClassTitle}>
                {title}
                <img className="chevron" src="" alt=""></img>
            </div>
            <div className={defaultClassContent + addClass + colorClassContent}>{content}</div>

        </div>
    );
}

export {Collapse}