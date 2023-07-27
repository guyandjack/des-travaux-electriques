//contenu textuel de la page "Compteur Energie"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des fonctions
import { scrollTo } from "../../../Utils/Function/scrollTo.js";

//Import des composants enfants
import { NavLink } from "../../../Components/NavLink/NavLink.jsx";

//Import des feuilles de style
import "../../../Style/CSS/content_page_compteur_energie.css";

/*** contenu textuel de la page ******* */
let ContentTextPageCompteurEnergie = {
  introductionTexte: (
    <div>
      <p>
        Avant toute intervention, veuillez mettre hors tension le circuit
        concerné au niveau du tableau de répartition et vérifier ensuite
        l'absence de tension avec un VAT (Vérificateur d'Absence de Tension) au
        point d'intervention.
      </p>
    </div>
  ),

  collapseDescription: (
    <div className="description">
      <p className="description__text">
        En 2023 nous pouvons encore trouver trois types de compteur dans nos
        logements.
      </p>
      <div className="description__text">
        <br></br>
        <strong
          onClick={() => {
            scrollTo("[id='compteur-a-disque']");
          }}
        >
          <NavLink
            text="Les compteurs électromecaniques:"
            colorText="second"
          ></NavLink>
        </strong>
        <br></br>
        Reconnaissable par son disque mécanique et son look vintage, ce type de
        compteur est le plus ancien. Les rotations du disque indiquent
        l’électricité consommée. Plus ce disque tourne vite, plus la
        consommation électrique est importante.
      </div>
      <div className="description__text">
        <br></br>
        <strong
          onClick={() => {
            scrollTo("[id='compteur-electronique']");
          }}
        >
          <NavLink
            text="Les compteurs électroniques:"
            colorText="second"
          ></NavLink>
        </strong>
        <br></br>
        Il s’agit ici de la deuxième génération de compteurs électriques. De
        couleur blanche, il se caractérise par son écran numérique qui laissent
        apparaître des chiffres digitaux.
      </div>
      <div className="description__text">
        <br></br>
        <strong
          onClick={() => {
            scrollTo("[id='compteur-linky']");
          }}
        >
          <NavLink text="Les compteurs Linky:" colorText="second"></NavLink>
        </strong>
        <br></br>
        Facilement reconnaissable par sa couleur verte, c’est le plus récent des
        modèles. Linky est un compteur communiquant, qui transmet vos données et
        habitudes de consommation à votre fournisseur d'électricité.
      </div>
    </div>
  ),

  compteurEnergieAncien: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c'est un{" "}
          <Link to="">interrupteur différentiel</Link> à haute sensibilité 63A
          30mA. Ce dernier est placé en amont du circuit.
        </p>
        <p className="principe__text">
          <Link to="">Le disjoncteur magnétothermique </Link>
          protègent notre installation contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          Le câblage d'un "simple allumage" est le plus facile à comprendre.
          Lorsque que l'on appui sur l'interrupteur on ferme ou on ouvre le
          circuit, le foyer lumineux est respectivement sous tension ou hors
          tension.Le foyer lumineux s'éclaire ou s'éteint.
        </p>
      </div>
    ),

    collapsePrecaution: (
      <div>
        <ul className="precaution">
          <p className="precaution__text">
            Obligation de respecter les points suivants:
          </p>

          <li key="1" className="precaution__li">
            Utilisation d'une section de
            <span className="important"> 1.5mm² minimum</span> avec un
            <span className="important"> disjoncteur maximal de 16A </span>.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est obligatoirement bleu
          </li>
          <li key="7" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune
          </li>
          <li key="7" className="precaution__li">
            Retourlampe toute autre couleur sauf bleu, vert, jaune, bicolore
            vert/jaune.
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Dans la pratique on utilise des conducteurs 1.5mm², avec un
          disjoncteur de 10A.
        </p>

        <p className="astuce__text">
          Prévoyez de faire la connexion avec des connecteurs rapides pour fils
          souples si votre luminaire est équipé de fils souple. Ils ont la
          caractéristique d'avoir des leviers pour verrouiller et déverrouiller
          la connexion.
        </p>

        <p className="astuce__text">
          Utilisez des connecteurs rapides transparents, cela permet de vérifier
          rapidement si la connexion est bien établie.
        </p>

        <p className="astuce__text">
          Pour le retour lampe on choisi une couleur différente de celle de la
          phase. C'est plus facile pour se repérer lorsque que l'on fait les
          racordements dans les boîtes de dérivation.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          Avec un disjoncteur de 10 A, nous disposons d'une puissance disponible
          de 2300 VA (230 * 10 ) . En limitant à 8, le nombre de foyers lumineux
          par circuit, on dispose de 287.5 VA (2300 / 8) par point
          d'utilisation. La norme arrondi à 300VA. On peut donc commander avec
          un interrupteur une trentaine de led de 10 Watt dans un même local.
        </p>
      </div>
    ),
  },
  compteurEnergieElectronique: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c'est un{" "}
          <Link to="">interrupteur différentiel</Link> à haute sensibilité 63A
          30mA. Ce dernier est placé en amont du circuit.
        </p>
        <p className="principe__text">
          <Link to="">Le disjoncteur magnétothermique </Link>
          protègent notre installation contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          Le câblage d'un "simple allumage" est le plus facile à comprendre.
          Lorsque que l'on appui sur l'interrupteur on ferme ou on ouvre le
          circuit, le foyer lumineux est respectivement sous tension ou hors
          tension.Le foyer lumineux s'éclaire ou s'éteint.
        </p>
      </div>
    ),

    collapsePrecaution: (
      <div>
        <ul className="precaution">
          <p className="precaution__text">
            Obligation de respecter les points suivants:
          </p>

          <li key="1" className="precaution__li">
            Utilisation d'une section de
            <span className="important"> 1.5mm² minimum</span> avec un
            <span className="important"> disjoncteur maximal de 16A </span>.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est obligatoirement bleu
          </li>
          <li key="7" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune
          </li>
          <li key="7" className="precaution__li">
            Retourlampe toute autre couleur sauf bleu, vert, jaune, bicolore
            vert/jaune.
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Dans la pratique on utilise des conducteurs 1.5mm², avec un
          disjoncteur de 10A.
        </p>

        <p className="astuce__text">
          Prévoyez de faire la connexion avec des connecteurs rapides pour fils
          souples si votre luminaire est équipé de fils souple. Ils ont la
          caractéristique d'avoir des leviers pour verrouiller et déverrouiller
          la connexion.
        </p>

        <p className="astuce__text">
          Utilisez des connecteurs rapides transparents, cela permet de vérifier
          rapidement si la connexion est bien établie.
        </p>

        <p className="astuce__text">
          Pour le retour lampe on choisi une couleur différente de celle de la
          phase. C'est plus facile pour se repérer lorsque que l'on fait les
          racordements dans les boîtes de dérivation.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          Avec un disjoncteur de 10 A, nous disposons d'une puissance disponible
          de 2300 VA (230 * 10 ) . En limitant à 8, le nombre de foyers lumineux
          par circuit, on dispose de 287.5 VA (2300 / 8) par point
          d'utilisation. La norme arrondi à 300VA. On peut donc commander avec
          un interrupteur une trentaine de led de 10 Watt dans un même local.
        </p>
      </div>
    ),
  },
  compteurEnergieLinky: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c'est un{" "}
          <Link to="">interrupteur différentiel</Link> à haute sensibilité 63A
          30mA. Ce dernier est placé en amont du circuit.
        </p>
        <p className="principe__text">
          <Link to="">Le disjoncteur magnétothermique </Link>
          protègent notre installation contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          Le câblage d'un "simple allumage" est le plus facile à comprendre.
          Lorsque que l'on appui sur l'interrupteur on ferme ou on ouvre le
          circuit, le foyer lumineux est respectivement sous tension ou hors
          tension.Le foyer lumineux s'éclaire ou s'éteint.
        </p>
      </div>
    ),

    collapsePrecaution: (
      <div>
        <ul className="precaution">
          <p className="precaution__text">
            Obligation de respecter les points suivants:
          </p>

          <li key="1" className="precaution__li">
            Utilisation d'une section de
            <span className="important"> 1.5mm² minimum</span> avec un
            <span className="important"> disjoncteur maximal de 16A </span>.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est obligatoirement bleu
          </li>
          <li key="7" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune
          </li>
          <li key="7" className="precaution__li">
            Retourlampe toute autre couleur sauf bleu, vert, jaune, bicolore
            vert/jaune.
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Dans la pratique on utilise des conducteurs 1.5mm², avec un
          disjoncteur de 10A.
        </p>

        <p className="astuce__text">
          Prévoyez de faire la connexion avec des connecteurs rapides pour fils
          souples si votre luminaire est équipé de fils souple. Ils ont la
          caractéristique d'avoir des leviers pour verrouiller et déverrouiller
          la connexion.
        </p>

        <p className="astuce__text">
          Utilisez des connecteurs rapides transparents, cela permet de vérifier
          rapidement si la connexion est bien établie.
        </p>

        <p className="astuce__text">
          Pour le retour lampe on choisi une couleur différente de celle de la
          phase. C'est plus facile pour se repérer lorsque que l'on fait les
          racordements dans les boîtes de dérivation.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          Avec un disjoncteur de 10 A, nous disposons d'une puissance disponible
          de 2300 VA (230 * 10 ) . En limitant à 8, le nombre de foyers lumineux
          par circuit, on dispose de 287.5 VA (2300 / 8) par point
          d'utilisation. La norme arrondi à 300VA. On peut donc commander avec
          un interrupteur une trentaine de led de 10 Watt dans un même local.
        </p>
      </div>
    ),
  },
};

/**** url des contenus media de la page ***** */

let ContentImagePageCompteurEnergie = {
  //Vignette
  compteurAncien: {
    small:
      "/Asset/images_page_compteur_energie/compteur-electromecanique-500px.png",
    medium:
      "/Asset/images_page_compteur_energie/compteur-electromecanique-500px.png",
    large:
      "/Asset/images_page_compteur_energie/compteur-electromecanique-500px.png",
  },
  compteurElectronique: {
    small:
      "/Asset/images_page_compteur_energie/compteur-electronique-500px.png",
    medium:
      "/Asset/images_page_compteur_energie/compteur-electronique-500px.png",
    large:
      "/Asset/images_page_compteur_energie/compteur-electronique-500px.png",
  },
  compteurLinky: {
    small: "/Asset/images_page_compteur_energie/compteur-linky-500px.png",
    medium: "/Asset/images_page_compteur_energie/compteur-linky-500px.png",
    large: "/Asset/images_page_compteur_energie/compteur-linky-500px.png",
  },

  //Schema
  schemaCompteurAncien: {
    small: "",
    medium: "",
    large: "",
  },
  schemaCompteurLinky: {
    small: "",
    medium: "",
    large: "",
  },
};

export { ContentTextPageCompteurEnergie, ContentImagePageCompteurEnergie };
