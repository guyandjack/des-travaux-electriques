//Page "circuits éclairage"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import {
  ContentTextPageCircuitEclairage,
  ContentImagePageCircuitEclairage,
} from "../../Data/ContentForPage/PageCircuitEclairage/ContentPageCircuitEclairage.jsx";

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
import "../../Style/CSS/circuit_eclairage.css";

//Import des fonctions
const requestFetch = require("../../Utils/Function/RequeteAPI.js");
const dateFormat = require("../../Utils/Function/Date.js");
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

//Fonction "PageCircuitEclairage"
function PageCircuitEclairage() {
  /**** hooks "useState" ******* */

  //url des images à afficher
  const [schema_eclairage_SA, setSchema_eclairage_SA] = useState();
  const [schema_eclairage_VV, setSchema_eclairage_VV] = useState();
  const [schema_eclairage_BP, setSchema_eclairage_BP] = useState();
  const [schema_eclairage_radar, setSchema_eclairage_radar] = useState();

  //Tableau contenant les commentaires issus de la bdd
  const [arrayComments, setArrayComments] = useState([]);

  //Initialisation d' une props du composant "coment"
  const [initialIdValue, setInitialIdValue] = useState(-1);

/**** hooks "useEffect" ******* */
  
  
  //Positionne le scroll en haut de page
  useEffect(() => {
    scrollTo(".circuit-eclairage");
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

  //Premplie les inputs user si une session est ouverte
  useEffect(() => {
    defaultValueInputUser.setValueInputUser();
  }, []);

  //reference de la page
  const refPage = "circuit-eclairage";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let originalCommentId = null;
  let commentDate = null;

  //fonctions
  function setUrl() {
    let imageType = giveImageType();
    console.log("image type dans fonction seturl: " + imageType);
    setSchema_eclairage_SA(
      ContentImagePageCircuitEclairage.schemaSimpleAllumage[imageType]
    );
    setSchema_eclairage_VV(
      ContentImagePageCircuitEclairage.schemaVaEtVient[imageType]
    );
    setSchema_eclairage_BP(
      ContentImagePageCircuitEclairage.schemaBoutonPoussoir[imageType]
    );
    setSchema_eclairage_radar(
      ContentImagePageCircuitEclairage.schemaDetecteurPresence[imageType]
    );

    console.log("url image simple allumage: " + schema_eclairage_SA);
  }

  return (
    <div className="circuit-eclairage">
      <Loader />
      <div className="container-title">
        <Title
          pagetype="page"
          title="Circuit éclairage"
          text={ContentTextPageCircuitEclairage.introductionTexte}
        ></Title>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="Circuit éclairage... ?"
          content={ContentTextPageCircuitEclairage.collapseDescription}
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <section id="simple-allumage" className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit éclairage avec un « Simple allumage »"
            titleLevel="h2"
            titleSize="2em"
            titleColor="first-color"
            titleId="sa"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schema_eclairage_SA}
            alt1={"Schéma de câblage d' un éclairage simple allumage. "}
            figcap1={"Schéma de câblage d' un éclairage simple allumage. "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="sa-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitEclairage.simpleAllumage.collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="sa-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitEclairage.simpleAllumage.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="sa-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCircuitEclairage.simpleAllumage.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="sa-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCircuitEclairage.simpleAllumage.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section id="va-et-vient" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit éclairage avec « va et vient »"
            titleLevel="h2"
            titleSize="2em"
            titleColor="first-color"
            titleId="vv"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schema_eclairage_VV}
            alt1={"Schéma de câblage d'un eclairage va et vient "}
            figcap1={"Schéma de câblage d'un eclairage va et vient "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="vv-principe"
            title="principe de fonctionnement"
            content={ContentTextPageCircuitEclairage.vaEtVient.collapsePrincipe}
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="vv-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitEclairage.vaEtVient.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="vv-astuce"
            title="trucs & astuces"
            content={ContentTextPageCircuitEclairage.vaEtVient.collapseAstuce}
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="vv-savoir"
            title="En savoir plus..."
            content={ContentTextPageCircuitEclairage.vaEtVient.collapseSavoir}
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section id="bouton-poussoir" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit éclairage avec « boutons poussoirs »"
            titleLevel="h2"
            titleSize="2em"
            titleColor="first-color"
            titleId="bp"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schema_eclairage_BP}
            alt1={"Schéma de câblage avec boutons poussoirs "}
            figcap1={"Schéma de câblage avec boutons poussoirs "}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="bp-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitEclairage.boutonPoussoir.collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="bp-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitEclairage.boutonPoussoir.collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="bp-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCircuitEclairage.boutonPoussoir.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="bp-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCircuitEclairage.boutonPoussoir.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section id="detecteur-de-presence" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit éclairage avec « détecteur de présence »"
            titleLevel="h2"
            titleSize="2em"
            titleColor="first-color"
            titleId="radar"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={schema_eclairage_radar}
            alt1={"Schéma de câblage avec détecteur de présence."}
            figcap1={"Schéma de câblage avec détecteur de présence."}
          />
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="radar-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCircuitEclairage.detecteurDePresence
                .collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="radar-precaution"
            title="precautions"
            content={
              ContentTextPageCircuitEclairage.detecteurDePresence
                .collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="radar-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCircuitEclairage.detecteurDePresence.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="radar-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCircuitEclairage.detecteurDePresence.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <div className="text-quiz">
        <Link to="/schema/circuit-eclairage/quiz">
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

              //recuperation de l' "id" du commentaire original
              originalCommentId = onecomment.originalcommentid;

              //si "response" est egal à "1" ce commentaire est une réponse.
              if (onecomment.response == 1) {
                //Seconde itération dans le  tableau des commentaires.
                //pour trouver un commentaire dont l'"id" correspond à "originalCommentId"
                //On recupere ainsi les infos du commentaire original
                let theFindedCommentOriginal = arrayComments.find(
                  (findedComment) => findedComment.id == originalCommentId
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

export { PageCircuitEclairage };
