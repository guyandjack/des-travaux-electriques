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
          <NavLink text="Schéma avec un simple allumage" colorText="second"></NavLink>
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
          <NavLink text="Schéma avec des boutons poussoirs" colorText="second"></NavLink>
        </li>
        <li
          className="description-list__li"
          onClick={() => {
            scrollTo("#detecteur-de-presence");
          }}
        >
          <NavLink text="Schéma avec un détecteur de présence" colorText="second"></NavLink>
        </li>
        
      </ul>
      
    </div>
  ),

  simpleAllumage: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c'est un interrupteur différentiel à haute
          sensibilité 63A 30mA. Ce dernier est placé en amont du circuit.
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
                Avec une 
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
          pour la protection des personnes. Le disjonteur 2A protège la bobine
          du contacteur HP/HC. Le disjoncteur 20A protège quant à lui le circuit
          du cumulus. Le contacteur, pour faire simple, fonctionne comme un
          interrupteur. Il ouvre ou ferme le circuit de puissance (cumulus)
          suivant si sa bobine est hors tension ou sous tension. Quand EDF emet
          le signal « heure creuse », le contact sec du compteur se ferme et la
          bobine du conctacteur jour/nuit est alimentée. Le conctacteur
          s'enclenche et le cumulus est sous tension, alimenté via le
          disjoncteur 20A.
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
            <span className="important"> 2.5² minimum</span> avec un
            <span className="important"> disjoncteur max de 20A</span>pour le
            circuit du cumulus.
          </li>
          <li key="1" className="precaution__li">
            Utilisation d'une section de
            <span className="important"> 1.5mm²</span> avec un
            <span className="important"> disjoncteur max de 2A</span>pour le
            circuit de commande du contacteur.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est obligatoirement bleu.
          </li>
          <li key="7" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Utilisez des connecteurs rapides transparents, cela permet de vérifier
          rapidement si la connexion est bien établie.
        </p>

        <p className="astuce__text">
          Veillez à bien connecter la terre sur le bornier de racordement du
          cumulus.
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
          <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple, c'est un interrupteur différentiel de type A, avec
          un courant assigné maximal de 63A, et une sensibilite de 30mA. Ce
          dernier est placé en amont du circuit 1.
        </p>
        <p className="principe__text">
          <Link to="/disjoncteur">Le disjoncteur magnétothermique </Link>
          protège notre circuit contre les courts-circuits et surcharges. Il
          alimente uniquement la prise 16A pour notre lave-linge.
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
            <span className="important"> 2.5² minimum</span> avec un
            <span className="important"> disjoncteur max de 20A</span>.
          </li>

          <li key="3" className="precaution__li">
            Disjoncteur dédié uniquement au lave-linge. Pas de raccord possible
            avec un autre appareillage.
          </li>

          <li key="5" className="precaution__li">
            Interrupteur ou disjoncteur différentiel
            <span className="important"> (de type A, F ou B)</span>.
          </li>
          <li key="6" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="7" className="precaution__li">
            Neutre c'est obligatoirement bleu .
          </li>
          <li key="8" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune .
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Utiliser une couleur différente de fils, pour différencier la phase
          permanante issue du tableau et la sortie du boutton poussoir qui vient
          alimentar la bobine du télérupteur.
        </p>
        <p>
          Cela permet un repérage plus facile, et donc un câblage au niveau du
          tableau plus rapide.
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
          Utiliser le câblage avec un "detecteur de présence" permet de
          commander un ou plusieurs points d'éclairage automatiquement.
        </p>
        <p className="principe__text">
          A l'exterieur de votre logement par exemple pour éclairer le palier
          lorsque vous arrivé de nuit.
        </p>
        <p>
          Ou alors à des endroits ou il est frequent d' oublier d'éteindre la
          lumière.
        </p>
        <p className="principe__text">
          <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple, c'est un interrupteur différentiel de type A, avec
          un courant assigné maximal de 63A, et une sensibilite de 30mA. Ce
          dernier est placé en amont du circuit 1.
        </p>
        <p className="principe__text">
          <Link to="/disjoncteur">Le disjoncteur magnétothermique </Link>
          protège notre circuit contre les courts-circuits et surcharges. Il
          alimente uniquement la prise 16A pour notre lave-linge.
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
            <span className="important"> 1.5² minimum</span> avec un
            <span className="important"> disjoncteur max de 16A</span>.
          </li>

          <li key="5" className="precaution__li">
            Interrupteur ou disjoncteur différentiel
            <span className="important"> (de type AC A, F ou B)</span>.
          </li>
          <li key="6" className="precaution__li">
            Phase c'est marron en général ou toute autre couleur sauf bleu,
            vert, jaune, bicolore vert/jaune.
          </li>
          <li key="7" className="precaution__li">
            Neutre c'est obligatoirement bleu .
          </li>
          <li key="8" className="precaution__li">
            Terre c'est obligatoirement bicolore vert/jaune .
          </li>
          <li key="8" className="precaution__li">
            Retour lampe c'est toute autre couleur sauf bleu, vert, jaune,
            bicolore vert/jaune.
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
        <p className="savoir__text"></p>
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
