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

//Import des feuilles de style
import "../../Style/CSS/prise_courant.css";

//Fonction "PagePC16A"

function PagePC16A() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");
  const [arrayComments, setArrayComments] = useState([]);

  //url image

  let comptagePrise = ContentImagePagePC16A.comptage_pc[imageSize];
  let schemaPC = ContentImagePagePC16A.schema_pc[imageSize];
  let pcFront = ContentImagePagePC16A.pc_front_face[imageSize];
  let pcBack = ContentImagePagePC16A.pc_back_face[imageSize];

  //constante
  const refPage = "pc16a";

  //variable
  let originalFirstname = null;
  let originalContent = null;
  let originalCommentId = null;
  let commentDate = null;

  //hooks
  //determine la taille de l' ecran pour les images responsives
  useEffect(() => {
    getImageSize();
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  //réalise une requette sur l'api pour récuperer les commentaires de la page consultée
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
    <div className="prise-courant">
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
        <Link to="/quiz/pc16a">
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

export { PagePC16A };
