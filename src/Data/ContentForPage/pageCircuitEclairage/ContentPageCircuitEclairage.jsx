//contenu textuel de la page "Circuit éclairage"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des fonctions
import { scrollTo } from "../../../Utils/Function/scrollTo.js";

//Import des composants enfants
import { NavLink } from "../../../Components/NavLink/NavLink.jsx";

//Import des feuilles de style
import "../../../Style/CSS/content_page_circuit_eclairage.css";

/*** contenu textuel de la page ******* */
let ContentTextPageCircuitEclairage = {
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
        Le nombre maximal de points d'utilisation par circuit est de "8".
      </p>
      <p className="description__text">
        Dans le cas de spots ou de bandeaux lumineux, on compte un point
        d'éclairage pour 300 VA dans le même local.
      </p>

      <p className="description__text">
        Dans un logement, la norme électrique impose au moins un foyer lumineux
        fixe dans les locaux suivants:
      </p>
      <ul className="description-list">
        <li className="description-list__li">Séjour</li>
        <li className="description-list__li">Chambres</li>
        <li className="description-list__li">Cuisine</li>
        <li className="description-list__li">Salle d'eau</li>
        <li className="description-list__li">Entrée / dégagement</li>
        <li className="description-list__li">WC</li>
        <li className="description-list__li">Cellier</li>
        <li className="description-list__li">Pallier extérieur</li>
      </ul>

      <p className="description__text">
        Il existe plusieurs types de schéma de câblage, nous verrons ici les
        principaux:
      </p>

      <ul className="description-list">
        <li
          className="description-list__li"
          onClick={() => {
            scrollTo("#simple-allumage");
          }}
        >
          <NavLink
            text="Schéma avec un simple allumage"
            colorText="second"
          ></NavLink>
        </li>

        <li
          className="description-list__li"
          onClick={() => {
            scrollTo("#va-et-vient");
          }}
        >
          <NavLink text="Schéma avec va et vient" colorText="second"></NavLink>
        </li>

        <li
          className="description-list__li"
          onClick={() => {
            scrollTo("#bouton-poussoir");
          }}
        >
          <NavLink
            text="Schéma avec des boutons poussoirs"
            colorText="second"
          ></NavLink>
        </li>
        <li
          className="description-list__li"
          onClick={() => {
            scrollTo("#detecteur-de-presence");
          }}
        >
          <NavLink
            text="Schéma avec un détecteur de présence"
            colorText="second"
          ></NavLink>
        </li>
      </ul>
    </div>
  ),

  simpleAllumage: {
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

  vaEtVient: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          Utiliser le câblage "va et vient" permet de commander un ou plusieurs
          points d' éclairage depuis deux endroits différents.
        </p>
        <p className="principe__text">
          Dans une chambre par exemple, si on souhaite commander l' eclairage
          principal central depuis la porte et depuis sont lit.
        </p>
        <p className="principe__text">
          Nous avons dans cet exemple un interrupteur differentiel 63A type AC
          pour la protection des personnes. Le disjoncteur 10A protège notre
          circuit contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          La phase issue de notre disjoncteur se connecte sur le commun du
          premier interrupteur. Quelque soit la position de ce dernier une
          navette conduira la phase au second interrupteur. Suivant la position
          du second interrupteur la phase sera conduite ou non au foyer
          lumineux.
        </p>
        <p className="principe__text">
          Si notre second interrupteur conduit la phase sur le luminaire, celui
          ci s'allume. Nous pouvons donc éteindre notre luminaire de deux
          façons. 1- Avec le premier interrupteur en conduisant la phase sur
          l'autre navette. 2- Avec le second interrupteur en conduisant notre
          retour lampe sur l'autre navette.
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
          Il existe un schéma de câblage pour commander un point lumineux de
          trois endroits différents.
        </p>
        <p className="savoir__text">
          Ce schéma est un peu plus complexe et est source de confusion, donc de
          disfonctionnement si on ne le maitrise pas bien. On prefferera
          utiliser dans ce cas des boutons pussoirs et un télérupteur.Bien plus
          facile à mettre en oeuvre.
        </p>
        <p className="savoir__text">
          De plus l' utilisation de boutons poussoirs ne limite pas le nombre de
          point de commande à trois.
        </p>
      </div>
    ),
  },

  boutonPoussoir: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          Utiliser un câblage "boutton poussoir"(BP) permet de commander un ou
          plusieurs points d'éclairage depuis une infinite d'endroits différents
          de votre logement.
        </p>
        <p className="principe__text">
          Dans la pratique on utilise ce câblage à partir de trois points de
          commande.
        </p>
        <p className="principe__text">
          <Link to="">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple, c'est un interrupteur différentiel de type AC,
          avec un courant assigné maximal de 63A, et une sensibilite de 30mA. Ce
          dernier est placé en amont du circuit.
        </p>
        <p className="principe__text">
          <Link to="">Le disjoncteur magnétothermique </Link>
          protège notre circuit contre les courts-circuits et surcharges.
        </p>

        <p className="principe__text">
          Lorsque nous appuyons sur le BP, la phase est conduite sur la bobine
          du télérupteur. Ce dernier ferme le ciruit, ou ouvre le circuit. Le
          télérupteur à la particularité de changer d'état à chaque nouvelle
          impulsion (pression sur le BP).
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
            Retour lampe toute autre couleur sauf bleu, vert, jaune, bicolore
            vert/jaune.
          </li>
          <li key="7" className="precaution__li">
            Retour BP toute autre couleur sauf bleu, vert, jaune, bicolore
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
          On peut réaliser le câblage des boutons pousoir sur le neutre. Cela
          évite d'avoir la phase au niveau du point de commande.
        </p>
        <p>
          Par convention, on reste sur un câblage standard avec la phase au
          niveau de la commande.
        </p>
      </div>
    ),
  },

  detecteurDePresence: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          Utiliser le câblage avec un "détecteur de présence" permet de
          commander un ou plusieurs points d'éclairage automatiquement.
        </p>
        <p className="principe__text">
          A l'exterieur de votre logement par exemple pour éclairer le palier
          lorsque vous arrivé de nuit.
        </p>
        <p>
          Ou alors à des endroits ou il est frequent d'oublier d'éteindre la
          lumière.
        </p>
        <p className="principe__text">
          <Link to="">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple, c'est un interrupteur différentiel de type AC,
          avec un courant assigné maximal de 63A, et une sensibilite de 30mA. Ce
          dernier est placé en amont du circuit.
        </p>
        <p className="principe__text">
          <Link to="">Le disjoncteur magnétothermique </Link>
          protège notre circuit contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          Le détecteur de présence agit comme un simple interrupteur, lorsqu' il
          détecte un mouvement, il ferme le circuit.
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
          Pour un usage extérieur pensez à utiliser un détecteur avec un IP
          adapté.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          Veillez à utiliser un détecteur avec un courant nominal adapté lors de
          l'utilisation d'unéclairage de forte puissance.
        </p>
      </div>
    ),
  },
};

/**** url des contenus media de la page ***** */

let ContentImagePageCircuitEclairage = {
  //Vignette
  detecteurPresence: {
    small: "",
    medium: "",
    large: "",
  },

  //travaux-electriques\public\Asset\images_page_circuit_eclairage\schema-eclairage-sa-1500px.png
  //Schema
  schemaSimpleAllumage: {
    small: "/Asset/images_page_circuit_eclairage/schema-eclairage-sa-500px.png",
    medium:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-sa-1000px.png",
    large:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-sa-1500px.png",
  },
  schemaVaEtVient: {
    small: "/Asset/images_page_circuit_eclairage/schema-eclairage-vv-500px.png",
    medium:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-vv-1000px.png",
    large:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-vv-1500px.png",
  },
  schemaBoutonPoussoir: {
    small: "/Asset/images_page_circuit_eclairage/schema-eclairage-bp-500px.png",
    medium:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-bp-1000px.png",
    large:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-bp-1500px.png",
  },
  schemaDetecteurPresence: {
    small:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-radar-500px.png",
    medium:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-radar-1000px.png",
    large:
      "/Asset/images_page_circuit_eclairage/schema-eclairage-radar-1500px.png",
  },
};

export { ContentTextPageCircuitEclairage, ContentImagePageCircuitEclairage };
