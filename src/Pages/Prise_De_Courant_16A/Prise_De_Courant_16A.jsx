//Page "prise de courant 16A"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import {
  ContentTextPagePC16A,
  ContentImagePagePC16A,
} from "../../Data/ContentForPage/PagePC16A/ContentPagePC16A.jsx";

//Import des composants enfants
import { Title } from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ContainerImg } from "../../Components/Container_img/Container_img.jsx";
import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";
import { Formulaire } from "../../Components/Formulaire/Formulaire.jsx";
import { CommentUser } from "../../Components/CommentUser/CommentUser.jsx";
import { Loader } from "../../Components/Loader/Loader.jsx";

//Import des functions
import { scrollTo } from "../../Utils/Function/scrollTo.js";
import { giveImageType } from "../../Utils/Function/giveImageType.js";

//Import des feuilles de style
import "../../Style/CSS/prise_courant.css";
//import { forEach } from "../../../backendtest/data/refpage/refpage.js";



//Import des fonctions
const requestFetch = require("../../Utils/Function/RequeteAPI.js");
const dateFormat = require("../../Utils/Function/Date.js");
const defaultValueInputUser = require("../../Utils/Function/LocalStorage.js");

//Fonction "PagePC16A"

function PagePC16A() {
  //hooks "useState"
  const [imageType, setImageType] = useState();
  const [arrayComments, setArrayComments] = useState([]);
  const [initialIdValue, setInitialIdValue] = useState(-1);

  //url image

  let comptagePrise = ContentImagePagePC16A.comptage_pc[imageType];
  let schemaPC = ContentImagePagePC16A.schema_pc[imageType];
  let pcFront = ContentImagePagePC16A.pc_front_face[imageType];
  let pcBack = ContentImagePagePC16A.pc_back_face[imageType];

  //constante
  const refPage = "pc16a";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let commentDate = null;

  //hooks "useEffect"

  //Positionne le scroll en haut de page
  useEffect(() => {
    scrollTo(".prise-courant");
  }, []);

  //Selectionne l' url de  l'image à afficher en fonction de la taille de l'ecran.
  useEffect(() => {
    let imgType = giveImageType();
    setImageType(imgType);
    console.log("type image page pc: " + imgType)

    window.addEventListener("resize", () => {
      let imgType = giveImageType();
      setImageType(imgType);
      console.log("type image page pc: " + imgType);
    });

    return () => {
      window.removeEventListener("resize", () => {
        let imgType = giveImageType();
        setImageType(imgType);
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

  return (
    <div className="prise-courant">
      <Loader />
      <div className="container-title">
        <Title
          pagetype="page"
          title="prise de courant 16A"
          text={ContentTextPagePC16A.introductionTexte}
        ></Title>
      </div>

      <div className="container-image-header">
        <ContainerImg
          displaytype={"row"}
          src1={pcFront}
          alt1={"Prise de courant 16A face avant"}
          figcap1={"Prise de courant 16A face avant"}
          src2={pcBack}
          alt2={"Prise de courant 16A face arrière"}
          figcap2={"Prise de courant 16A face arrière"}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="description"
          title="description du matériel"
          content={ContentTextPagePC16A.collapseDescription}
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <div className="container-image-schema">
        <ContainerImg
          displaytype={"row"}
          src1={schemaPC}
          alt1={"Schéma de câblage d' une prise de courant 16A "}
          figcap1={"Schéma de câblage d' une prise de courant 16A "}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="principe"
          title="principe de fonctionnement"
          content={ContentTextPagePC16A.collapsePrincipe}
          color="first"
          colorText="fifth"
        ></Collapse>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="precaution"
          title="precautions"
          content={ContentTextPagePC16A.collapsePrecaution}
          color="second"
          colorText="fifth"
        ></Collapse>
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="astuce"
          title="trucs & astuces"
          content={ContentTextPagePC16A.collapseAstuce}
          color="third"
          colorText="fifth"
        ></Collapse>
      </div>

      <div className="container-image-main">
        <ContainerImg
          displaytype={"row"}
          src1={comptagePrise}
          alt1={"Equivalence et comptage du nombre de prise "}
          figcap1={"Equivalence et comptage du nombre de prise "}
        />
      </div>

      <div className="container-collapse">
        <Collapse
          idCollapse="savoir"
          title="En savoir plus..."
          content={ContentTextPagePC16A.collapseSavoir}
          color="fourth"
          colorText="fifth"
        ></Collapse>
      </div>

      <div className="text-quiz">
        <Link to="/schema/pc16a/quiz">
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
        {/****************************** Logique des commentaires  *******************************************

        -1- chaque commentaire s' affiche ds l'ordre chronologique d' enregistrement de la bdd (comme une messagerie/chat)

        -2- Il y a trois types de commentaire
          Type a: commentaire "original/initial"
          Type b: commentaire "réponse" à un commentaire "original"
          Type c: commentaire "réponse" à un commentaire "reponse"

        -3- Distinction des types de commentaire
          On utilise trois champs de la bdd

          a) "id"                 du commentaire générer par la bdd lors de l'enregistrement
          b) "originalcommentid"  générer par le formulaire qui soumet les infos au backend
          c) "response"           générer par le formulaire qui soumet les infos au backend

        -4- Contenu  des commentaires
          I) Commentaire Type a

            a) Le "prénom/pseudo" de l' utilisateur issu de la bdd
            b) La "Date" issu de la bdd formatée par le frontend avec la fonction "formatDate"
            c) Le contenu textuel du issu de la bdd (corps du message)

          II) Commentaire Type b et Type c

            a) Le "prénom/pseudo" de l' utilisateur issu de la bdd
            b) La "Date" issu de la bdd formatée par le frontend avec la fonction "formatDate"
            c) Le contenu textuel du issu de la bdd (corps du message)
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

export { PagePC16A };
