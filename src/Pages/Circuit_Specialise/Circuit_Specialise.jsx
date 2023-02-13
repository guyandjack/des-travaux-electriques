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

  //url image.

  let plaqueDeCuisson =
    ContentImagePageCircuitSpecialise.plaqueCuisson[imageSize];
  let chauffage = ContentImagePageCircuitSpecialise.chauffage[imageSize];
  let cumulus = ContentImagePageCircuitSpecialise.cumulus[imageSize];
  let laveLinge = ContentImagePageCircuitSpecialise.laveLinge[imageSize];

  //url image schema.

  let schemaPlaqueDeCuisson =
    ContentImagePageCircuitSpecialise.schemaPlaqueCuisson[imageSize];
  let schemaCumulus =
    ContentImagePageCircuitSpecialise.schemaCumulus[imageSize];
  let schemaChauffage =
    ContentImagePageCircuitSpecialise.schemaChauffage[imageSize];
  let schemaLaveLinge =
    ContentImagePageCircuitSpecialise.schemalaveLinge[imageSize];

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
          text={
            ContentTextPageCircuitSpecialise.plaqueDeCuisson.introductionTexte
          }
        ></Title>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="Circuit dedié ou circuit spécialisé ?"
          content={
            ContentTextPageCircuitSpecialise.plaqueDeCuisson.collapseDescription
          }
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <section className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit spécialisé « Plaque de cuisson »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schemaPlaqueDeCuisson}
            alt1={"Schéma de câblage d'une plaque de cuisson "}
            figcap1={"Schéma de câblage d'une plaque de cuisson "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitSpecialise.plaqueDeCuisson.collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="precaution"
            title="precautions"
            content={
              ContentTextPageCircuitSpecialise.plaqueDeCuisson
                .collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCircuitSpecialise.plaqueDeCuisson.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCircuitSpecialise.plaqueDeCuisson.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit dédié « cumulus »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schemaCumulus}
            alt1={"Schéma de câblage d'un cumulus "}
            figcap1={"Schéma de câblage d'un cumulus "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="cumulus-principe"
            title="principe de fonctionnement"
            content={ContentTextPageCircuitSpecialise.cumulus.collapsePrincipe}
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="cumulus-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitSpecialise.cumulus.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="cumulus-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitSpecialise.cumulus.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="cumulus-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitSpecialise.cumulus.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit dédié « chauffage »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schemaChauffage}
            alt1={"Schéma de câblage d'un chauffage "}
            figcap1={"Schéma de câblage d'un chauffage "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitSpecialise.chauffage.collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitSpecialise.chauffage.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitSpecialise.chauffage.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="chauffage-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitSpecialise.chauffage.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit dédié « lave-linge »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schemaLaveLinge}
            alt1={"Schéma de câblage d'un chauffage "}
            figcap1={"Schéma de câblage d'un chauffage "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitSpecialise.chauffage.collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitSpecialise.chauffage.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitSpecialise.chauffage.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitSpecialise.chauffage.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

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
