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
import { Formulaire } from "../../Components/Formulaire/Formulaire.jsx";
import { CommentUser } from "../../Components/CommentUser/CommentUser.jsx";

//Import des feuilles de style
import "../../Style/CSS/circuit_specialise.css";

//Fonction "PageCircuitSpecialise"
function PageCircuitSpecialise() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");
  const [arrayComments, setArrayComments] = useState([]);

  //url image.

  let plaqueDeCuisson =
    ContentImagePageCircuitSpecialise.plaqueCuisson[imageSize];
  let chauffage = ContentImagePageCircuitSpecialise.chauffage[imageSize];
  let cumulus = ContentImagePageCircuitSpecialise.cumulus[imageSize];
  let laveLinge = ContentImagePageCircuitSpecialise.laveLinge[imageSize];

  //constante
  const refPage = "circuit-specialise";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let originalCommentId = null;
  let commentDate = null;

  //url image schema.

  let schemaPlaqueDeCuisson =
    ContentImagePageCircuitSpecialise.schemaPlaqueCuisson[imageSize];
  let schemaCumulus =
    ContentImagePageCircuitSpecialise.schemaCumulus[imageSize];

  let schemaLaveLinge =
    ContentImagePageCircuitSpecialise.schemalaveLinge[imageSize];

  //hooks

  //determine la taille de l' ecran pour les images responsives
  useEffect(() => {
    getImageSize();
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  //realise une requette sur l' api pour recuperer les commentaires de la page
  useEffect(() => {
    fetch("http://localhost:3500/api/comment/" + refPage)
      .then((response) => {
        response.json().then((responses) => {
          setArrayComments(JSON.parse(responses));
        });
      })

      .catch((error) => {
        console.log("msg erreur requette api: " + error);
      });
  }, []);

  //fonctions

  //Formate une date issu de la bdd mysql
  function formatDate(dateSql) {
    //separe les differentes parties de la date dans un tableau
    let dateSplit = dateSql.split(/[T.:]/);

    //garde les 4 premiers elements de date dans le tableau
    let dateFormated = dateSplit.splice(0, 3);

    //insertion des carracteres de lisibilite
    dateFormated.splice(0, 0, "Le ");
    dateFormated.splice(2, 0, " à ");
    dateFormated.splice(4, 0, ":");

    //formatage de la partie 'annee' de la date
    let year = dateFormated[1].split("-").reverse().join("/");

    //Implement de la nouvelle partie 'annee' dans la date
    dateFormated.splice(1, 1, year);

    return dateFormated;
  }

  //determine l 'url des images en fonction de la taille d' ecran
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
    <div className="circuit-specialise">
      <div className="container-title">
        <Title
          pagetype="page"
          title="Circuits spécialisés"
          text={
            ContentTextPageCircuitSpecialise.plaqueDeCuisson.introductionTexte
          }
        ></Title>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="Circuits spécialisés... ?"
          content={
            ContentTextPageCircuitSpecialise.plaqueDeCuisson.collapseDescription
          }
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <section id="cuisson" className="section">
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

      <section id="cumulus" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit spécialisé « cumulus »"
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

      <section id="lave-linge" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit spécialisé « lave-linge »"
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
              ContentTextPageCircuitSpecialise.laveLinge.collapsePrincipe
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
              ContentTextPageCircuitSpecialise.laveLinge.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitSpecialise.laveLinge.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="lave-linge-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitSpecialise.laveLinge.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <div className="text-quiz">
        <Link to="/quiz/circuit-specialise">
          <ButtonStd
            btntype="button"
            text="Testez vos connaissances avec le 'Quiz'"
            colorbg="third"
            colortext="fifth"
          ></ButtonStd>
        </Link>
      </div>

      <div id="form" className="container-form">
        <Formulaire
          pageRef={refPage}
          isResponse={0}
          responseTo={null}
          responseIdTo={null}
        />
      </div>

      <ul id="" className="container-comment">
        {arrayComments.length > 0
          ? arrayComments.map((onecomment, index) => {
              //si "response" est egal à "1" ce commentaire est une réponse.
              if (onecomment.response == 1) {
                //recuperation du commentaire original
                let originalCommentId = onecomment.originalcommentid;

                //formatage de la date
                commentDate = formatDate(onecomment.date);

                //Seconde itération dans le  tableau des commentaires.
                //pour trouver un commentaire dont l'id correspond à "originalCommentId"
                let theFindedCommentOriginal = arrayComments.find(
                  (findedComment) => findedComment.id == originalCommentId
                );

                //Recuperation du "prenom" , du "contenu" et de l' "id" du commentaire original
                originalFirstname = theFindedCommentOriginal.firstname;
                originalContent = theFindedCommentOriginal.content;
                originalCommentId = onecomment.id;
              } else {
                //resetage du "prenom" , du "contenu" et de l' "id" du commentaire original
                originalFirstname = "";
                originalContent = "";
                originalCommentId = "";
              }
              return (
                <li key={index} className="comment-li">
                  <CommentUser
                    //props qui contiennent les infos à afficher dans "commentUser":
                    firstname={onecomment.firstname}
                    text={onecomment.content}
                    date={commentDate}
                    originalfirstname={originalFirstname}
                    originaltext={originalContent}
                    //props à transmettre au formulaire contenu dans "commentUser"
                    originalcommentid={originalCommentId}
                    //id du commentaire original à envoyer via le formulaire pour la bdd
                    //Cet id original est l' id du commentaire parent.
                  />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}

export { PageCircuitSpecialise };
