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
import { Loader } from "../../Components/Loader/Loader.jsx";

//Import des functions
import { scrollTo } from "../../Utils/Function/scrollTo.js";
import { giveImageType } from "../../Utils/Function/giveImageType.js";

//Import des feuilles de style
import "../../Style/CSS/circuit_specialise.css";

//Import des fonctions
const requestFetch = require("../../Utils/Function/RequeteAPI.js");
const dateFormat = require("../../Utils/Function/Date.js");
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

//Fonction "PageCircuitSpecialise"
function PageCircuitSpecialise() {
  //hooks "useState"
  //url des images à afficher
  const [plaqueDeCuisson, setPlaqueDeCuisson] = useState();
  const [cumulus, setCumulus] = useState();
  const [laveLinge, setLaveLinge] = useState();

  //Tableau contenant les commentaires issus de la bdd
  const [arrayComments, setArrayComments] = useState([]);

  //Initialisation d' une props du composant "coment"
  const [initialIdValue, setInitialIdValue] = useState(-1);

  //constante
  const refPage = "circuit-specialise";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let commentDate = null;

  //hooks "useEffect"

  //Positionne le scroll en haut de page
  useEffect(() => {
    scrollTo(".circuit-specialise");
  }, []);

  //Selectionne l'url de l'image à afficher en fonction de la taille de l'ecran.
  useEffect(() => {
    setUrl();
    window.addEventListener("resize", () => {
      setUrl();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setUrl();
      });
    };
  }, []);
  //réalise une requette sur l'api pour récuperer les commentaires de la page consultée
  //todo: implementer une com wesocket avec le serveur
  useEffect(() => {
    //premiere requete une fois les composants montés.
    //et emsuite toute les minutes
    requestFetch.fetchCommentsForOnePage(refPage, setArrayComments);
    const timer = setInterval(
      () => requestFetch.fetchCommentsForOnePage(refPage, setArrayComments),
      60000
    );
    //lorsque que le composant est demonté on stope  "timer"
    return function () {
      clearInterval(timer);
    };
  }, []);

  //Préremplie les inputs user si une session est ouverte
  useEffect(() => {
    defaultValueInputUser.setValueInputUser();
  }, []);

  //fonctions locales
  
  function setUrl() {
    let imageType = giveImageType();

    setPlaqueDeCuisson(
      ContentImagePageCircuitSpecialise.schemaPlaqueCuisson[imageType]
    );
    setCumulus(ContentImagePageCircuitSpecialise.schemaCumulus[imageType]);
    setLaveLinge(ContentImagePageCircuitSpecialise.schemalaveLinge[imageType]);
  }

  return (
    <div className="circuit-specialise">
      <Loader />
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
            titleLevel="h2"
            titleSize="1.9em"
            titleColor="first-color"
            titleId="plaque-de-cuisson"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={plaqueDeCuisson}
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
            titleLevel={"h2"}
            titleSize={"1.8em"}
            titleColor={"first-color"}
            titleId={"circuit-cumulus"}
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={cumulus}
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
            titleLevel={"h2"}
            titleSize={"1.8em"}
            titleColor={"first-color"}
            titleId={"ll"}
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={laveLinge}
            alt1={"Schéma de câblage d'un lave-linge "}
            figcap1={"Schéma de câblage d'un lave-linge "}
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
        <Link to="/schema/circuit-specialise/quiz">
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
          responseIdTo={initialIdValue}
        />
      </div>

      <ul id="" className="container-comment">
        {/****************************** Logique des commentaires:*******************************************

        -1- chaque commentaire s' affiche ds l'ordre chronologique d' enregistrement de la bdd (comme une messagerie/chat)

        -2- Il y a trois types de commentaire
          Type a: commentaire "original/initial"
          Type b: commentaire "réponse" à un commentaire "original"
          Type c: commentaire "réponse" à un commentaire "reponse"

        -3- Distinction des types de commentaire
          On utilise trois champs de la bdd
          a) "id"                 du commentaire générer par la bdd lors de l'enregistrement
          b) "originalcommentid"  determiné par le bakend et inseré dans la bdd lors de l'enregistrement
          c) "response"           générer par le formulaire qui soumet les infos au backend

        -4- Contenu  des commentaires
          I) Commentaire Type a

            a) Le "prénom/pseudo" de l' utilisateur issu de la bdd
            b) La "Date" issu de la bdd formatée par le frontend avec la fonction "formatDate"
            c) Le contenu textuel du issu de la bdd

          II) Commentaire Type b et Type c

            a) Le "prénom/pseudo" de l' utilisateur issu de la bdd
            b) La "Date" issu de la bdd formatée par le frontend avec la fonction "formatDate"
            c) Le contenu textuel du issu de la bdd
            d) le "prenom/pseudo" du commentaite original/initial
            e) Le contenu textuel du commentaire original/initial

        

         */}
        {arrayComments.length > 0
          ? arrayComments.map((onecomment, index) => {
              //reset des variables
              originalFirstname = null;
              originalContent = null;

              //formatage de la date
              commentDate = dateFormat.formatDate(onecomment.date);

              //si "response" est egal à "1" ce commentaire est une réponse.
              //On recherche le commentaire original qui lui correspond
              if (onecomment.response == 1) {
                //Seconde itération dans le  tableau des commentaires.
                //pour trouver un commentaire dont l'"id" correspond à "originalCommentId" du commentaire "response"
                //On recupere ainsi les infos du commentaire original
                let theFindedCommentOriginal = arrayComments.find(
                  (findedComment) =>
                    findedComment.id == onecomment.originalcommentid
                );

                //Recuperation du "prenom" , du "contenu"  du commentaire "original"
                originalFirstname = theFindedCommentOriginal.firstname;
                originalContent = theFindedCommentOriginal.content;
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
                    originalcommentid={onecomment.id}
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
