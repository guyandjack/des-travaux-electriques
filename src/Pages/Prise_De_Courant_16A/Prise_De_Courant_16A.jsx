//Page "prise de courant 16A"

//Import du contenu textuel des collapse
import { textContentCollapse } from "../../Data/contenu_textuel_collapse/contenu_textuel_collapse.jsx";


//Import des composants enfants
import {Title} from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ListeShemaCablage } from "../../Components/Liste_Schema_De_cablage/Liste_Schema_De_Cablage.jsx";

//Import des feuilles de style
import "../../Style/CSS/prise_courant.css";


//Fonction "PagePC16A"
function PagePC16A() {
    return (
      <div className="prise-courant">
        
        <Title title="prise courant 16A" pagetype="page"></Title>

        <ListeShemaCablage pagename={"priseCourant"}></ListeShemaCablage>

        <Collapse
          idCollapse="principe"
          title="principe de fonctionnement"
          content={textContentCollapse.pagePC16A.collapsePrincipe}
          color="first"
        ></Collapse>

        <Collapse
          idCollapse="precaution"
          title="precautions"
          content={textContentCollapse.pagePC16A.collapsePrecaution}
          color="second"
        ></Collapse>

        <Collapse
          idCollapse="astuce"
          title="trucs & astuces"
          content={textContentCollapse.pagePC16A.collapseAstuce}
          color="third"
        ></Collapse>

        <Collapse
          idCollapse="savoir"
          title="En savoir plus..."
          content={textContentCollapse.pagePC16A.collapseSavoir}
          color="fourth"
        ></Collapse>

      </div>
    );
}

export {PagePC16A}