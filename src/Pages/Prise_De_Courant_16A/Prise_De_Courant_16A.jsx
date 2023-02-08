//Page "prise de courant 16A"

//Import des hooks
import { useState, useEffect } from "react";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du contenu de la page
import { ContentTextPagePC16A, ContentImagePagePC16A } from "../../Data/ContentForPage/PagePC16A/ContentPagePC16A.jsx";


//Import des composants enfants
import {Title} from "../../Components/Title/Title.jsx";
import { Collapse } from "../../Components/Collapse/Collapse.jsx";
import { ContainerImg } from "../../Components/Container_img/Container_img.jsx";
import { ButtonStd } from "../../Components/ButtonStd/ButtonStd.jsx";


//Import des feuilles de style
import "../../Style/CSS/prise_courant.css";







//Fonction "PagePC16A"
function PagePC16A() {

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState("");


  //url image
  
  let comptagePrise = ContentImagePagePC16A.comptage_pc[imageSize];
  let schemaPC = ContentImagePagePC16A.schema_pc[imageSize];
  let pcFront = ContentImagePagePC16A.pc_front_face[imageSize];
  let pcBack = ContentImagePagePC16A.pc_back_face[imageSize];

  useEffect(() => {
    getImageSize();
    window.addEventListener("resize", ()=>{setWindowSize(window.innerWidth)})
   
  }, [windowSize]);

  function getImageSize() {

    let newSizeScreen = window.innerWidth;
    console.log(newSizeScreen)
    
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
            title="prise de courant 16A / 20A"
            text={ContentTextPagePC16A.introductionTexte}>
            
            </Title>
        </div>
        
        <div className="container-image-pc">
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
          ></Collapse>
        </div>

        <div className="container-image-schemapc">
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
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="precaution"
            title="precautions"
            content={ContentTextPagePC16A.collapsePrecaution}
            color="second"
          ></Collapse>
        </div>

        <div className="container-collapse">
          <Collapse
            idCollapse="astuce"
            title="trucs & astuces"
            content={ContentTextPagePC16A.collapseAstuce}
            color="third"
          ></Collapse>
        </div>

        <div className="container-image-comptagepc">
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
          ></Collapse>
        </div>

        <div className="text-quiz">
          
          <Link to="/quiz">
            <ButtonStd btntype="button" text="Lancer le 'Quiz'" colorbg="third" colortext="fifth"></ButtonStd>
          </Link>
        </div>
      </div>
    );
}

export {PagePC16A}