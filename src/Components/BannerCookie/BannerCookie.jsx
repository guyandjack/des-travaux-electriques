//Composant "BannerCookie"


//Import des hook
import { useState, useEffect } from "react";

//Import du composant "Link"
import { Link } from "react-router-dom";



//Import des composants enfants

//Import du contenu de la banner cookie
import { cookieContent } from "";

//Import des feuilles de style
import "../../Style/CSS/sous-menu.css";

//Fonction "BannerCookie"

function BannerCookie() {
    return (
        <div className="cookie">
            <p className="cookie__text">{ }</p>
            <Link className="cookie__link" to="/">Accepter les cookies essentiels</Link>
            <Link className="cookie__link" to="/"></Link>
        </div>
    )
}
