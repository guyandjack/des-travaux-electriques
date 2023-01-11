//Page "prise de courant 16A"

//Import du contenu de la page
import { ContentPagePC16A } from "../../Data/ContentForPage/ContentPagePC16A.jsx";


//Import des composants enfants
import {Title} from "../../Components/Title/Title.jsx";
import {IntroText} from "../../Components/Introduction_Text/Introduction_Text.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ListeShemaCablage } from "../../Components/Liste_Schema_De_cablage/Liste_Schema_De_Cablage.jsx";

//Import des feuilles de style
import "../../Style/CSS/prise_courant.css";


//Fonction "PagePC16A"
function PagePC16A() {
    return (
      <div className="prise-courant">
        
        <Title pagetype="page" title="prise de courant 16A" text="" ></Title>
        <IntroText content={ContentPagePC16A.introductionTexte}></IntroText>

        <ListeShemaCablage pagename={"priseCourant"}></ListeShemaCablage>

        <div className="container-collapse">
        <Collapse
          idCollapse="principe"
          title="principe de fonctionnement"
          content={ContentPagePC16A.collapsePrincipe}
          color="first"
        ></Collapse>
        </div>

        <div className="container-collapse">
        <Collapse
          idCollapse="precaution"
          title="precautions"
          content={ContentPagePC16A.collapsePrecaution}
          color="second"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="astuce"
            title="trucs & astuces"
            content={ContentPagePC16A.collapseAstuce}
            color="third"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="savoir"
            title="En savoir plus..."
            content={ContentPagePC16A.collapseSavoir}
            color="fourth"
            ></Collapse>
        </div>

      </div>
    );
}

export {PagePC16A}