//Page "circuits spécialiés"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import {
  ContentTextPageCircuitSpecialise,
  ContentImagePageCircuitSpecialise,
} from "../../Data/ContentForPage/PageCircuitSpecialise/ContentPageCircuitSpecialise.jsx";

//Import des composants enfants
import { Title } from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ContainerImg } from "../../Components/Container_img/Container_img.jsx";
import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";
import { TitleHN } from "../../Components/Title/TitleHN/TitleHN.jsx";

//Import des feuilles de style
import "../../Style/CSS/circuit_specialise.css";

//Fonction "PageCircuitSpecialise"
function PageCircuitSpecialise() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");

  //url image

  let plaqueDeCuisson = ContentImagePageCircuitSpecialise.plaqueCuisson[imageSize];
  let chauffage = ContentImagePageCircuitSpecialise.chauffage[imageSize];
  let cumulus = ContentImagePageCircuitSpecialise.cumulus[imageSize];
  let  laveLinge = ContentImagePageCircuitSpecialise.laveLinge[imageSize];

  useEffect(() => {
    getImageSize();
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  function getImageSize() {
    let newSizeScreen = window.innerWidth;
    console.log(newSizeScreen);

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
      <div className="circuit-specialise">
          
      <div className="container-title">
        <Title
          pagetype="page"
          title="Circuits specialisés et/ou dédiés"
          text={ContentTextPageCircuitSpecialise.introductionTexte}
        ></Title>
      </div>

      <div className="container-image">
        <ContainerImg
          displaytype={"row"}
          src1={plaqueDeCuisson}
                  alt1={"Plaque de cuisson"}
                  figcap1={"Plaque de cuisson"}
          src2={chauffage}
          alt2={"Chauffage electrique"}
          figcap2={"Chauffage electrique"}
        />
          </div>
          
      <div className="container-image">
        <ContainerImg
          displaytype={"row"}
          src1={cumulus}
                  alt1={"Chauffe eau à accumulation"}
          figcap1={"Chauffe eau à accumulation"}
          src2={laveLinge}
          alt2={"Lave linge"}
          figcap2={"Lave linge"}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="description du matériel"
          content={ContentTextPageCircuitSpecialise.collapseDescription}
          color="fourth"
        ></Collapse>
      </div>

       
          
      <div className="container-image-schema">
        <ContainerImg
          displaytype={"row"}
          src1={plaqueDeCuisson}
          alt1={"Schéma de câblage d'une plaque de cuisson "}
          figcap1={"Schéma de câblage d'une plaque de cuisson "}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="principe"
          title="principe de fonctionnement"
          content={ContentTextPageCircuitSpecialise.collapsePrincipe}
          color="first"
        ></Collapse>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="precaution"
          title="precautions"
          content={ContentTextPageCircuitSpecialise.collapsePrecaution}
          color="second"
        ></Collapse>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="astuce"
          title="trucs & astuces"
          content={ContentTextPageCircuitSpecialise.collapseAstuce}
          color="third"
        ></Collapse>
      </div>

      <div className="container-image">
        <ContainerImg
          displaytype={"row"}
          src1={chauffage}
          alt1={"Equivalence et comptage du nombre de prise "}
          figcap1={"Equivalence et comptage du nombre de prise "}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="savoir"
          title="En savoir plus..."
          content={ContentTextPageCircuitSpecialise.collapseSavoir}
          color="fourth"
        ></Collapse>
      </div>

      <div className="text-quiz">
        <Link to="/quiz">
          <ButtonStd
            btntype="button"
            text="Lancer le 'Quiz'"
            colorbg="third"
            colortext="fifth"
          ></ButtonStd>
        </Link>
      </div>
    </div>
  );
}

export { PageCircuitSpecialise };
