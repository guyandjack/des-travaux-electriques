//Page "Composant--Compteur d' énergie"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import {
  ContentTextPageCompteurEnergie,
  ContentImagePageCompteurEnergie,
} from "../../../Data/ContentForPage/pageCompteurEnergie/ContentPageCompteurEnergie.js";

//Import des composants enfants
import { Title } from "../../../Components/Title/Title.jsx";
import { Collapse } from "../../../Components/Collapse/Collapse.jsx";
import { ContainerImg } from "../../../Components/Container_img/Container_img.jsx";
import { ButtonStd } from "../../../Components/ButtonStd/ButtonStd.jsx";
import { TitleHN } from "../../../Components/Title/TitleHN/TitleHN.jsx";
import { Formulaire } from "../../../Components/Formulaire/Formulaire.jsx";
import { CommentUser } from "../../../Components/CommentUser/CommentUser.jsx";
import { Loader } from "../../../Components/Loader/Loader.jsx";

//Import des functions
import { scrollTo } from "../../../Utils/Function/scrollTo.js";

//Import des feuilles de style
import "../../../Style/CSS/compteur_energie.css";

//Import des fonctions
const requetsFetch = require("../../../Utils/Function/RequeteAPI.js");
const dateFormat = require("../../../Utils/Function/Date.js");
const sizeScreen = require("../../../Utils/Function/giveImageSize.js");
const defaultValueInputUser = require("../../../Utils/Function/LocalStorage.js");

//Fonction "PageCompteurEnergie"
function PageCompteurEnergie() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");
  const [arrayComments, setArrayComments] = useState([]);

  //url image.

  let compteurElectromecanique =
    ContentImagePageCompteurEnergie.compteurAncien[imageSize];
  let compteurElectronique =
    ContentImagePageCompteurEnergie.compteurElectronique[imageSize];
  let compteurLinky = ContentImagePageCompteurEnergie.compteurLinky[imageSize];

  //constante
  const refPage = "compteur-energie";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let originalCommentId = null;
  let commentDate = null;

  //url image schema.

  let schemaCompteurAncien =
    ContentImagePageCompteurEnergie.schemaCompteurAncien[imageSize];

  let schemaCompteurLinky =
    ContentImagePageCompteurEnergie.schemaCompteurLinky[imageSize];

  //hooks

  //Positionne le scroll en haut de page
  useEffect(() => {
    scrollTo(".compteur-energie");
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
    <div className="compteur-energie">
      <Loader />
      <div className="container-title">
        <Title
          pagetype="page"
          title="Compteur d'énergie"
          text={ContentTextPageCompteurEnergie.introductionTexte}
        ></Title>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="Compteurs d'énergie... ?"
          content={ContentTextPageCompteurEnergie.collapseDescription}
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <section id="compteur-a-disque" className="section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Compteur d'énergie à disque"
            titleLevel="h2"
            titleSize="1.9em"
            titleColor="first-color"
            titleId="compteur-ancien"
          />
        </div>
        <div className="container-image-header">
          <ContainerImg
            displaytype={"row"}
            src1={compteurElectromecanique}
            alt1={"Compteur électromecanique"}
            figcap1={"Compteur électromecanique"}
          />
        </div>

        
        <div className="container-collapse">
          <Collapse
            idCollapse="ancien-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieAncien
                .collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="ancien-precaution"
            title="precautions"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieAncien
                .collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="ancien-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieAncien
                .collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="ancien-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCompteurEnergie.compteurEnergieAncien
                .collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>
      <section id="compteur-electronique" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Compteur électronique"
            titleLevel="h2"
            titleSize="1.8em"
            titleColor="first-color"
            titleId="compteur-digital"
          />
        </div>
        <div className="container-image-header">
          <ContainerImg
            displaytype={"row"}
            src1={compteurElectronique}
            alt1={"Compteur électronique"}
            figcap1={"Compteur électronique"}
          />
        </div>

        

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky
                .collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-precaution"
            title="precautions"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky
                .collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <section id="compteur-linky" className="section color-section">
        <div className="container-undertitle">
          <TitleHN
            titleText="Compteur Linky"
            titleLevel={"h2"}
            titleSize={"1.8em"}
            titleColor={"first-color"}
            titleId={"compteur-communiquant"}
          />
        </div>
        <div className="container-image-header">
          <ContainerImg
            displaytype={"row"}
            src1={compteurLinky}
            alt1={"Compteur Linky"}
            figcap1={"Compteur Linky"}
          />
        </div>

        

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-principe"
            title="principe de fonctionnement"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky
                .collapsePrincipe
            }
            color="first"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-precaution"
            title="precautions"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky
                .collapsePrecaution
            }
            color="second"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-astuce"
            title="trucs & astuces"
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky.collapseAstuce
            }
            color="third"
            colorText="fifth"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="linky-savoir"
            title="En savoir plus..."
            content={
              ContentTextPageCompteurEnergie.compteurEnergieLinky.collapseSavoir
            }
            color="fourth"
            colorText="fifth"
          ></Collapse>
        </div>
      </section>

      <div className="text-quiz">
        <Link to="">
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

export { PageCompteurEnergie };
