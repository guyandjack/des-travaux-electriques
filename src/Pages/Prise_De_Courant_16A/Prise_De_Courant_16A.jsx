//Page "prise de courant 16A"

//Import du contenu textuel des collapse
import { textContentCollapse } from "../../Data/contenu_textuel_collapse/contenu_textuel_collapse.jsx";


//Import des composants enfants
import {Title} from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";

//Focntion "PagePC16A"
function PagePC16A() {
    return (
      <div>
        <Title title="prise courant 16A" pagetype="page"></Title>

        <Collapse
          idCollapse="principe"
          title="principe de fonctionnement"
          content={textContentCollapse.pagePC16A.collapsePrincipe}
        ></Collapse>

        <Collapse
          idCollapse="precaution"
          title="precautions"
          content={textContentCollapse.pagePC16A.collapsePrecaution}
        ></Collapse>

        <Collapse
          idCollapse="astuce"
          title="trucs & astuces"
          content={textContentCollapse.pagePC16A.collapseAstuce}
        ></Collapse>

        <Collapse
          idCollapse="savoir"
          title="En savoir plus..."
          content={textContentCollapse.pagePC16A.collapseSavoir}
        ></Collapse>
      </div>
    );
}

export {PagePC16A}