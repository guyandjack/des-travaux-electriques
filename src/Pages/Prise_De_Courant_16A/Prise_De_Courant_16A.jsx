//Page "prise de courant 16A"

//Import du contenu textuel des collapse
import { textContentCollapse } from "../../Data/contenu_textuel_collapse/contenu_textuel_collapse.jsx";

//Import de composants enfants
import { Collapse } from "../../Components/Collapse/Collapse.jsx";

//Focntion "PagePC16A"
function PagePC16A() {
    return (
      <Collapse
        
        title="Principe de fonctionnement"
        content={textContentCollapse.pagePC16A.collapsePrincipe}
      />
    );
}

export {PagePC16A}