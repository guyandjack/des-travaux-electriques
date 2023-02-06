//Composant "Containeur_img"

//Fonction "ContainerImg"

function ContainerImg({
  displaytype,
  src1,
  alt1,
  figcap1,
  src2,
  alt2,
  figcap2,
}) {
  let classContainer = "container-img";
  let classDisplayFlow = displaytype === "row" ? "row" : "column";

  return (
    <figure className={classContainer + classDisplayFlow}>
      <div className="cont-img2">
        <img className="img" src={src1} alt={alt1}></img>
        <figcaption className="figcaption">{figcap1}</figcaption>
      </div>

      <div className="cont-img2">
        <img className="img" src={src2} alt={alt2}></img>
        <figcaption className="figcaption">{figcap2}</figcaption>
      </div>
    </figure>
  );
}

export { ContainerImg };
