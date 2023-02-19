//contenu textuel de la page "Prise de courant"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../../Style/CSS/content_page_circuit_specialise.css";

/*** contenu textuel de la page ******* */
let ContentTextPageCircuitSpecialise = {
  plaqueDeCuisson: {
    introductionTexte: (
      <div>
        <p>
          Avant toute intervention, veillez mettre hors tension le circuit
          concerné au niveau du <Link to="/tgbt"> tableau de répartition </Link>
          et de vérifier ensuite l' absence de tension avec un VAT (vérificateur
          d'absence de tension) au point d' intervention.
        </p>
      </div>
    ),

    collapseDescription: (
      <div className="description">
        <p className="description__text">
          Pour respecter les règles de sécurité électrique du logement,
          l’installation doit comporter plusieurs circuits spécialisés afin
          d’alimenter certains équipements et plus particulièrement les
          appareils électroménagers de forte puissance.
        </p>
        <p className="description__text">
          Un circuit électrique « spécialisé » est un circuit qui fournit une
          alimentation spécifique à un seul équipement.
        </p>

        <p className="description__text">Le circuit du cumulus par exemple.</p>

        <p className="description__text">
          Dans un logement, la norme électrique impose l’installation d’au moins
          quatre circuits spécialisés :
        </p>
        <ul className="description-list">
          <li className="description-list__li">
            Un circuit dans la cuisine pour la plaque de cuisson ou la
            cuisinière.
          </li>
          <li className="description-list__li">
            Trois circuits spécialisés avec des prises de 16 A pour alimenter
            des équipements électroménagers.
          </li>
        </ul>
        <p className="description__text">
          La norme recommande de prévoir une prise spécialisée à proximité des
          arrivées et évacuations d’eau pour le lave-vaisselle et machine à
          laver. Les autres circuits spécialisés seront installés en fonction
          des besoins de l’occupant et de la configuration du logement.
        </p>
        <p>
          Liste non hexaustive des différents circuits spécialisés d' un
          logement:
        </p>

        <ul className="description-list">
          <li className="description-list__li">
            <a href="/circuit-specialise#cuisson">
              plaque de cuisson ou cuisinière
            </a>
          </li>
          <li className="description-list__li">four</li>
          <li className="description-list__li">lave-vaisselle</li>
          <li className="description-list__li">
            <a href="/circuit-specialise#lave-linge">
              lave-linge / sèche-linge
            </a>
          </li>
          <li className="description-list__li">congélateur</li>
          <li className="description-list__li">hotte</li>
          <li className="description-list__li">
            <a href="/circuit-specialise#cumulus">chauffe-eau</a>
          </li>
          <li className="description-list__li">pompe à chaleur</li>
          <li className="description-list__li">ventilation</li>
          <li className="description-list__li">spa / sauna / piscine</li>
          <li className="description-list__li">
            IRVE(Infrastructure de recharge de véhicules électriques)
          </li>
          <li className="description-list__li">cave à vins</li>
          <li className="description-list__li">portail / porte de garage</li>
          <li className="description-list__li">interphone</li>
          <li className="description-list__li">tableaux divisionnaires</li>
        </ul>
      </div>
    ),

    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c' est un interrupteur différentiel « dédié » à
          haute sensibilité 32A 30mA.Ce dernier est placé en amont de circuit 1.
        </p>
        <p className="principe__text">
          <Link to="/disjoncteur">Les disjoncteurs magnéto-thermique </Link>
          protègent notre installation contre les courts-circuits et surcharges.
        </p>
        <p className="principe__text">
          Le principe de câblage est simple, on doit respecter les couleurs.
          Dans la boite de dérivation on connecte les conducteurs de même type
          entre eux.Phase avec phase, neutre avec neutre, terre avec terre.
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
            Utilisation d' une section de
            <span className="important"> 6mm² minimum</span> avec un
            <span className="important"> disjoncteur de 32A</span>.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est maron en général ou toute autre couleur sauf bleu, vert,
            jaune, bicolor vert/jaune
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est bleu obligatoirement
          </li>
          <li key="7" className="precaution__li">
            Terre c'est bicolor vert/jaune obligatoirement
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Dans la pratique on utilise des conducteurs de 6mm² souple.Cela permet
          une connection plus aisé dans la boite d'encastrement.Les fils sont
          beaucoup plus facile à manipuler.
        </p>

        <p className="astuce__text">
          Prevoyez de faire la connection avec des connecteurs rapides pour fils
          souple. Ils ont la caracteristique d' avoir des leviers pour établir
          vérouiller et deverouiller la connection.
        </p>

        <p className="astuce__text">
          Comme pour les prises classiques, utilisez des connecteurs rapides
          transparents, cela permet de vérifier rapidement si la connection est
          bien établi.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          La hauteur minimum de l' axe d' une prise ou boite d' encastrement 32A
          monophasé ou 20A triphasé est de 12cm par rapport au sol fini.
        </p>
        <p className="savoir__text">
          Veillez à implanter votre prise ou sortie de câble à 60cm de toute
          arrivé ou évacuation d'eau.
        </p>
      </div>
    ),
  },

  cumulus: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          Le but du jeux et de faire fonctionner votre cumulus pendant les
          heures creuses, quand le prix du Kwh est plus faible.
        </p>
        <p className="principe__text">
          Pour ce faire il faut que votre compteur d'énergie ait l'option double
          tarif. Cette option est appelée aussi « heures pleines/heures creuses
          », « tarif jour/nuit », « HP/HC ».
        </p>
        <p className="principe__text">
          Nous avons dans cet exemple un interrupteur differentiel 63A type AC
          pour la protection des personnes. Le disjonteur 2A protege la bobine
          du contacteur HP/HC. Le disjoncteur 20A protege quand à lui le circuit
          du cumulus. Le contacteur, pour faire simple, fonctionne comme un
          interrupteur.Il ouvre ou ferme le circuit de puissance (cumulus)
          suivant si sa bobine est hors tension ou sous tension. Quand EDF emet
          le signal « Heure creuse » le contact sec du compteur se ferme et la
          bobine du conctacteur jour/nuit est alimenté. Le conctacteur s'
          enclenche et le cumulus est sous tension, alimenté via le disjoncteur
          20A.
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
            Utilisation d' une section de
            <span className="important"> 2.5² minimum</span> avec un
            <span className="important"> disjoncteur max de 20A</span>pour le
            circuit du cumulus.
          </li>
          <li key="1" className="precaution__li">
            Utilisation d' une section de
            <span className="important"> 1.5mm²</span> avec un
            <span className="important"> disjoncteur max de 2A</span>pour le
            circuit de commande du contacteur.
          </li>

          <li key="5" className="precaution__li">
            Phase c'est maron en général ou toute autre couleur sauf bleu, vert,
            jaune, bicolor vert/jaune
          </li>
          <li key="6" className="precaution__li">
            Neutre c'est bleu obligatoirement
          </li>
          <li key="7" className="precaution__li">
            Terre c'est bicolor vert/jaune obligatoirement
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: <div className="astuce"></div>,
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          La signal est emit par edf, à des heures differentes suivant les
          regions de votre residenece.
        </p>
      </div>
    ),
  },
  

  laveLinge: {
    collapsePrincipe: (
      <div className="principe">
        <p className="principe__text">
          <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
          assure la protection des personnes contre les contacts directs et
          indirects avec un conducteur actif.
        </p>
        <p className="principe__text">
          Dans notre exemple c' est un interrupteur différentiel de type A, avec
          un courant assigné max de 63A, et une sensibilite de 30mA.Ce dernier
          est placé en amont du circuit 1.
        </p>
        <p className="principe__text">
          <Link to="/disjoncteur">Le disjoncteur magnéto-thermique </Link>
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
            Utilisation d' une section de
            <span className="important"> 2.5² minimum</span> avec un
            <span className="important"> disjoncteur max de 20A</span>.
          </li>

          <li key="3" className="precaution__li">
            Disjoncteur dédié uniquement pour le lave-linge.Pas de raccord
            possible avec un autre appareillage.
          </li>

          <li key="5" className="precaution__li">
            Interrupteur ou disjoncteur différentiel{" "}
            <span className="important">de type A( ou F, ou B)</span>.
          </li>
          <li key="6" className="precaution__li">
            Phase c'est maron en général ou toute autre couleur sauf bleu, vert,
            jaune, bicolor vert/jaune.
          </li>
          <li key="7" className="precaution__li">
            Neutre c'est bleu obligatoirement.
          </li>
          <li key="8" className="precaution__li">
            Terre c'est bicolor vert/jaune obligatoirement.
          </li>
        </ul>
      </div>
    ),
    collapseAstuce: (
      <div className="astuce">
        <p className="astuce__text">
          Veillez à implanter votre prise de courant ou sortie de câble à 60cm
          de l' arrivé et evacuation d' eau de votre lave-linge.
        </p>
        <p className="astuce__text">
          Utiliser uniquement une section de 2.5mm² pour les circuits dédiés
          alimantant une prise 16A ou boîte sortie de câble.
        </p>
      </div>
    ),
    collapseSavoir: (
      <div className="savoir">
        <p className="savoir__text">
          Il est possible d' utiliser, un disjoncteur 20A avec une prise 16A
          pour un circuit dédié. Au même titre qu' il est possible d' utiliser
          jusqu' à 12 prises 16A avec un disjoncteur de 20A.
        </p>
      </div>
    ),
  },
};

/**** url des contenus media de la page ***** */

let ContentImagePageCircuitSpecialise = {
  //Vignette
  plaqueCuisson: {
    small:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/img-plaque-cuisson.png",
    medium:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/img-plaque-cuisson.png",
    large:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/img-plaque-cuisson.png",
  },
  cumulus: {
    small: "/Asset/images_page_circuit_specialise/cumulus/img-cumulus.png",
    medium: "/Asset/images_page_circuit_specialise/cumulus/img-cumulus.png",
    large: "/Asset/images_page_circuit_specialise/cumulus/img-cumulus.png",
  },
  chauffage: {
    small:
      "/Asset/images_page_circuit_specialise/chauffage/img-radiateur-electrique.png",
    medium:
      "/Asset/images_page_circuit_specialise/chauffage/img-radiateur-electrique.png",
    large:
      "/Asset/images_page_circuit_specialise/chauffage/img-radiateur-electrique.png",
  },
  laveLinge: {
    small:
      "/Asset/images_page_circuit_specialise/lave-linge/img-lave-linge.png",
    medium:
      "/Asset/images_page_circuit_specialise/lave-linge/img-lave-linge.png",
    large:
      "/Asset/images_page_circuit_specialise/lave-linge/img-lave-linge.png",
  },

  //Schema
  schemalaveLinge: {
    small:
      "/Asset/images_page_circuit_specialise/lave-linge/schema-lave-linge-600px.png",
    medium:
      "/Asset/images_page_circuit_specialise/lave-linge/schema-lave-linge-1000px.png",
    large:
      "/Asset/images_page_circuit_specialise/lave-linge/schema-lave-linge-1500px.png",
  },
  schemaCumulus: {
    small:
      "/Asset/images_page_circuit_specialise/cumulus/schema-cumulus-600px.png",
    medium:
      "/Asset/images_page_circuit_specialise/cumulus/schema-cumulus-1000px.png",
    large:
      "/Asset/images_page_circuit_specialise/cumulus/schema-cumulus-1500px.png",
  },
  schemaChauffage: {
    small:
      "/Asset/images_page_circuit_specialise/chauffage/schema-chauffage-600px.png",
    medium:
      "/Asset/images_page_circuit_specialise/chauffage/schema-chauffage-1000px.png",
    large:
      "/Asset/images_page_circuit_specialise/chauffage/schema-chauffage-1500px.png",
  },
  schemaPlaqueCuisson: {
    small:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/schema-plaque-cuisson-600px.png",
    medium:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/schema-plaque-cuisson-1000px.png",
    large:
      "/Asset/images_page_circuit_specialise/plaque-cuisson/schema-plaque-cuisson-1500px.png",
  },
};

export { ContentTextPageCircuitSpecialise, ContentImagePageCircuitSpecialise };
