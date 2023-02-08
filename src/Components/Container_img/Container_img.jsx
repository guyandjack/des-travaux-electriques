//Composant "Containeur_img"



//Import des feuilles de style
import "../../Style/CSS/container_img.css";

//Fonction "ContainerImg"

function ContainerImg({
  width,
  src1,
  alt1,
  figcap1,
  src2,
  alt2,
  figcap2,
}) {
  let classContainer = "main-container";
  

  return (
    <figure className={classContainer}>
      <div className="container">
        <img className="container__img" src={src1} alt={alt1} width={width}></img>
        <figcaption className="container__figcaption">{figcap1}</figcaption>
      </div>

      {src2 ? (
        <div className="container">
          <img className="container__img" src={src2} alt={alt2} width={width}></img>
          <figcaption className="container__figcaption">{figcap2}</figcaption>
        </div>
      ) : null}
    </figure>
  );
}

export { ContainerImg };
