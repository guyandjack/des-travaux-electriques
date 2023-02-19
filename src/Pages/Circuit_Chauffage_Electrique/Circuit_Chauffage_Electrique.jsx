//Page "circuits chauffage"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import { ContentTextPageCircuitChauffage, ContentImagePageCircuitChauffage } from "../../Data/ContentForPage/pageChauffageElectrique/ContentPageCircuitChauffage.jsx"

//Import des composants enfants
import { Title } from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ContainerImg } from "../../Components/Container_img/Container_img.jsx";
import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";
import { TitleHN } from "../../Components/Title/TitleHN/TitleHN.jsx";

//Import des feuilles de style
import "../../Style/CSS/circuit_chauffage_electrique.css";

//Fonction "PageCircuitChauffageElectrique"
function PageCircuitChauffageElectrique() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [imageSize, setImageSize] = useState("small");

    //url image

    let schemaChauffage = ContentImagePageCircuitChauffage.schema_circuit_chauffage[imageSize];

    useEffect(() => {
      getImageSize();
      window.addEventListener("resize", () => {
        setWindowSize(window.innerWidth);
      });
    }, [windowSize]);

    function getImageSize() {
      let newSizeScreen = window.innerWidth;
      

      if (newSizeScreen < 575) {
        setImageSize("small");
      }
      if (newSizeScreen >= 575 && newSizeScreen < 992) {
        setImageSize("medium");
      }
      if (newSizeScreen >= 992) {
        setImageSize("large");
      }
    }
    
  return (
      <div className="circuit-chauffage">
          <div className="container-title">
              <Title title="circuit chauffage électrique fixe" pagetype="page"></Title>
          </div>
      
        <div className="container-image-schema">
          <ContainerImg
            src1={schemaChauffage}
            alt1={"Schéma de câblage d'un circuit chauffage "}
            figcap1={"Schéma de câblage d'un circuit chauffage "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-principe"
            title="principe de fonctionnement"
            content={ContentTextPageCircuitChauffage.collapsePrincipe}
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-precaution"
            title="precautions"
            content={ContentTextPageCircuitChauffage.collapsePrecaution}
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitChauffage.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitChauffage.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      
    </div>
  );
}

export { PageCircuitChauffageElectrique };
