//Composant "Title"

//Import des feuilles de style
import "../../Style/CSS/title.css";

//Fonction "Title"

function Title({ pagetype, title, text, titlecolor, textcolor, urlimg }) {
  let classPageType = pagetype === "home" ? "title-home" : "title-page";
  let classText = pagetype === "home" ? "text-home" : "text-page";
  let classImg = "title-img";

  return (
    <div className="title">
      <h1 className={classPageType + " " + titlecolor} >{title}</h1>
      <div className="title__container-text">
        <span className={classText + " " + textcolor}>{text}</span>

        {urlimg ? <img className={classImg} src={urlimg} alt=""></img> : null}
      </div>
    </div>
  );
}

export { Title };
