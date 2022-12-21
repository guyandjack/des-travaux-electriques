//Composant "Collapse"

//Import des "hooks"
import { useState, useEffect } from "react";


//Import des feuilles de style
import "../../Style/CSS/collapse.css";


//Function "Collapse"

function Collapse({ idCollapse, title, content }) {

    const [isCliked, setIsCliked] = useState(false);
    
    useEffect(() => {
        let collapseTitle = document.getElementById(`${idCollapse}`);
        collapseTitle.addEventListener("click", function () { setIsCliked(!isCliked) });
    }, [isCliked]);

    let newClass = (isCliked) ? (" display") : (" hide");
    let defaultClass = "collapse-content";

    return (
        <div className="collapse">
            
            <div id={idCollapse } className="collapse__title">
                {title}
                <img className="chevron" src="" alt=""></img>
            </div>
            <div className={defaultClass + newClass}>{content}</div>

        </div>
    );
}

export {Collapse}