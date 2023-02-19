//Composant "NavMenu"

//Import des "hook"
import { useState, useContext, useEffect } from "react";



//Import des breakpoints
import "../../Utils/break_point/break_point.js";

//Import des composants enfants
import { NavCollapse } from "";
import { NavLink } from "";

//Import des feuilles de style
import "../../Style/CSS/nav-menu.css";

//Fonction "NavMenu"

function NavMenu({children}) {
    return (
        <ul className="nav-menu">
            {children.map((link, index) => {
                return (
                    <li key={index + "nav-menu-li"}>{link}</li>
               )
           })} 
        </ul>
    )
}

export {NavMenu}
