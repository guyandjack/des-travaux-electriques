//Composant "SiteIsBuilding"



//Import des feuilles de style
import "../../Style/CSS/site_is_building.css";

function SiteIsBuilding() {
    
    return (
        <div className="site-building">
            <p className="title"> -Site en cours de développement-</p>
            <p className="text"> La navigation se limite à quelques pages pour le moment.</p>
            <p className="text-end">Bonne visite!</p>
        </div>

    )
}

export {SiteIsBuilding}