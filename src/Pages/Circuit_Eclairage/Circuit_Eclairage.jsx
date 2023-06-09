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

//Import des functions
import { scrollTo } from "../../Utils/Function/scrollTo.js";

//Import des feuilles de style
import "../../Style/CSS/circuit_eclairage.css";

//Import des fonctions
const requetsFetch = require("../../Utils/Function/RequeteAPI.js");
const dateFormat = require("../../Utils/Function/Date.js");
const sizeScreen = require("../../Utils/Function/Size.js");
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

//Fonction "PageCircuitEclairage"
function PageCircuitEclairage() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");
  const [arrayComments, setArrayComments] = useState([]);

  //url image.

  /*let plaqueDeCuisson =
    ContentImagePageCircuitEclairage.plaqueCuisson[imageSize];
  let chauffage = ContentImagePageCircuitEclairage.chauffage[imageSize];
  let cumulus = ContentImagePageCircuitEclairage.cumulus[imageSize];
  let laveLinge = ContentImagePageCircuitEclairage.laveLinge[imageSize];*/

  //constante
  const refPage = "circuit-eclairage";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let originalCommentId = null;
  let commentDate = null;

  //url image schema.

  /*let schemaEclairageSimpleAllumage =
    ContentImagePageCircuitSpecialise.schemaPlaqueCuisson[imageSize];

  let schemaEclairageVaEtVient =
    ContentImagePageCircuitSpecialise.schemaCumulus[imageSize];

  let schemaEclairageBoutonPoussoir =
    ContentImagePageCircuitSpecialise.schemalaveLinge[imageSize];

  let schemaEclairageDetecteurPresence =
    ContentImagePageCircuitSpecialise.schemalaveLinge[imageSize];*/

  //Positionne le scroll en haut de page
  useEffect(() => {
    scrollTo(".circuit-eclairage");
  }, []);

  //recupere la taille de l' ecran pour les images responsives
  useEffect(() => {
    sizeScreen.giveImageSize(setImageSize);
    window.addEventListener("resize", () => {
      sizeScreen.giveImageSize(setImageSize);
    });
  }, []);

  //réalise une requette sur l'api pour récuperer les commentaires de la page consultée
  //todo: implementer une com wesocket avec le serveur
  useEffect(() => {
    requetsFetch.fetchCommentsForOnePage(refPage, setArrayComments);
    setInterval(
      () => requetsFetch.fetchCommentsForOnePage(refPage, setArrayComments),
      60000
    );
  }, []);

  //Premplie les inputs user si une session est ouverte
  useEffect(() => {
    defaultValueInputUser.setValueInputUser();
  }, []);

  return (
    <div className="circuit-eclairage">
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
          content={""}
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <section id="simple-allumage" className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Circuit éclairage avec un « Simple allumage »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={""}
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
            titleText="Circuit éclairage avec « vat et vient »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={""}
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
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={""}
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
            titleText="Circuit éclairage avec « detecteur de présence »"
            titleLevel={2}
            size={2}
            color="fourth"
          />
        </div>

        <div className="container-image-schema">
          <ContainerImg
            src1={""}
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
            content={ContentTextPageCircuitEclairage.detecteurDePresence.collapseSavoir}
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
          responseIdTo={null}
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

                //Un commentaire "reponse" à un "originalcommentid" égal à son "id"
                originalCommentId = onecomment.id;

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

export { PageCircuitEclairage };
