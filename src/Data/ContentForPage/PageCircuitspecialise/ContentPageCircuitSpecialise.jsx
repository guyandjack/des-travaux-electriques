//contenu textuel de la page "Prise de courant"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../../Style/CSS/content_page_pc.css";

/*** contenu textuel de la page ******* */
let ContentTextPageCircuitSpecialise = {
  introductionTexte: (
    <div>
      <p>
        Avant toute intervention, veillez mettre hors tension le circuit
        concerné au niveau du <Link to="/tgbt"> tableau de répartition </Link>{" "}
        et de vérifier ensuite l' absence de tension avec un VAT (vérificateur
        d'absence de tension) au point d' intervention.
      </p>
      <div>
        <p>Pour respecter les règles de sécurité électrique du logement,
        l’installation doit comporter plusieurs circuits spécialisés afin
        d’alimenter certains équipements et plus particulièrement les appareils
                    électroménagers de forte puissance.</p>
                <p>Un circuit électrique spécialisé est
        un circuit qui fournit une alimentation spécifique à un seul équipement.</p>
        <p>Il comporte une protection, une boîte de connexion avec sortie de câble
        32A pour la table cuisson et une prise de courant pour les autres
                    appareils.</p>
                Dans un logement, la norme électrique impose l’installation
        d’au moins quatre circuits spécialisés : un circuit dans la cuisine pour
        la plaque de cuisson ou la cuisinière, avec une boîte de 32 A avec
        sortie de câble adaptée en monophasé ou 20 A en triphasé ; trois
        circuits spécialisés avec des prises de 16 A pour alimenter des
        équipements comme le lave-vaisselle, le lave-linge, le sèche linge ou
        encore le four. La norme recommande de prévoir une prise spécialisée à
        proximité des arrivées et évacuations d’eau pour le lave-vaisselle et
        machine à laver. Les autres circuits spécialisés seront installés en
        fonction des besoins de l’occupant et de la configuration du logement.
        Liste non hexaustive des circuits spécialisés
        <ul>
          <li>plaque de cuisson</li>
          <li>four</li>
          <li>cuisinière</li>
          <li>lave-vaisselle</li>
          <li>lave-linge / sèche-linge</li>
          <li>congélateur</li>
          <li> hotte</li>
          <li>chauffe-eau</li>
          <li>pompe à chaleur</li>
          <li>ventilation</li>
          <li>spa / sauna / piscine</li>
          <li>IRVE</li>
          <li>cave à vins</li>
          <li>portail / porte de garage</li>
          <li>interphone</li>
          <li>volets roulants/stores</li>
          <li>tableaux divisionnaires</li>
          <li>
            circuits extérieurs (éclairage, prises de courant non attenantes au
            logement).
          </li>
        </ul>
      </div>
    </div>
  ),

  collapseDescription: (
    <ol className="description">
      <li className="description__li">Fiche de connexion à la terre</li>
      <li className="description__li">
        Obturateur de securite, pour éviter les contacts direct avec les fiches
      </li>
      <li className="description__li">
        Puit de securite, pour éviter les contacts direct avec les fiches males
        lors de la connexion.
      </li>
      <li className="description__li">
        La lettre " T " et ou le pictogramme indique la connexion avec la terre.
      </li>
      <li className="description__li">
        La lettre " L " indique la connexion avec la phase.
      </li>
      <li className="description__li">Levier de deconnexion.</li>
      <li className="description__li">
        Connecteur rapide, pas besoins d' outils pour connecter ou déconnecter
        le cable électrique
      </li>
      <li className="description__li">
        La lettre " N " indique la connexion avec le neutre.
      </li>
      <li className="description__li">Materiel certifié Norme Francaise</li>
      <li className="description__li">
        Tension et courant maximal d' utilisation
      </li>
    </ol>
  ),

  collapsePrincipe: (
    <div className="principe">
      <p className="principe__text">
        <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
        assure la protection des personnes contre les contacts directs et
        indirects avec un conducteur actif.
      </p>
      <p className="principe__text">
        Dans notre exemple c' est un interrupteur différentiel haute sensibilité
        63A 30mA.Ce dernier est placé en amont de circuit 1 et circuit 2.
      </p>
      <p className="principe__text">
        <Link to="/disjoncteur">Les disjoncteurs magnéto-thermique </Link>
        protègent notre installation contre les courts-circuits et surcharges.
      </p>
      <p className="principe__text">
        Le principe de câblage est simple, on doit respecter les couleurs. Dans
        la boite de dérivation on connecte les conducteurs de même type entre
        eux.Phase avec phase, neutre avec neutre, terre avec terre.
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
          Si utilisation d' une section de
          <span className="important"> 1.5mm² </span>, on peut placer un
          <span className="important"> disjoncteur de 16A max.</span>
        </li>
        <li key="2" className="precaution__li">
          Si utilisation d' une section de
          <span className="important"> 2.5mm² </span> , on peut placer un{" "}
          <span className="important"> disjoncteur de 20A max </span>.
        </li>
        <li key="3" className="precaution__li">
          Avec un disjoncteur 16A et une section 1.5mm² on peut placer 8 prises
          max.
        </li>
        <li key="4" className="precaution__li">
          Avec disjoncteur 20A et section 2.5mm² on peut placer 12 prises max.
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
        Dans la pratique on utilise uniquement des conducteurs de 2.5mm² pour un
        circuit PC(même si la norme autorise du 1.5mm²)
      </p>

      <p className="astuce__text">
        Le comptage des prises se fait socle par socle, même pour des boitiers
        munis de plusieurs prises(voir schéma equivalence PC)
      </p>

      <p className="astuce__text">
        Pour les locaux humide et à l' extérieur utilisez des prises étanches
        avec un<Link to="/ip"> indice de protection </Link> IPX4, voir IPX5 si
        l' emplacement est susceptible d' être arrosé au jet d'eau.
      </p>

      <p className="astuce__text">
        Dans la pratique, la hauteur d' implantation des prises est autour de
        35cm. Pensez à votre vieux dos...
      </p>

      <p className="astuce__text">
        Dans les pieces qui contiennent douche ou baignoire, pensez à implanter
        vos prises <Link to="/sdb">"Hors Volume"</Link>. Sauf la prise rasoir,
        qui peut etre en <Link to="/sdb"> volume 2 </Link>si elle est alimenté
        par un transformateur d' isolation.
      </p>
    </div>
  ),
  collapseSavoir: (
    <div className="savoir">
      <p className="savoir__text">
        La hauteur minimum de l' axe d' une prise est de 5cm par rapport au sol
        fini.
      </p>
      <p className="savoir__text">
        Même hauteur pour une prise au dessus du plan de travail de la cuisine.
      </p>
      <p className="savoir__text">
        Cette hauteur est augmenté à 12cm pour un boitier de prise 32A.(plaque
        de cuisson)
      </p>

      <p className="savoir__text">
        Pour les locaux comme véranda, sous-sol, vide sanitaire, buanderie et à
        l'exterieur un<Link to="/ip"> indice de protection </Link>adapté est
        exigé pour les apareillages.
      </p>
    </div>
  ),
};

/**** url des contenus media de la page ***** */

let ContentImagePageCircuitSpecialise = {
  plaqueCuisson: {
    small: "/Asset/images_page_circuitspecialise/png",
    medium: "/Asset/images_page_circuitspecialise/png",
    large: "/Asset/images_page_circuitspecialise/png",
  },
  cumulus: {
    small: "/Asset/images_page_circuitspecialise/ng",
    medium: "/Asset/images_page_circuitspecialise/ng",
    large: "/Asset/images_page_circuitspecialise/ng",
  },
  chauffage: {
    small: "/Asset/images_page_circuitspecialise/g",
    medium: "/Asset/images_page_circuitspecialise/ng",
    large: "/Asset/images_page_circuitspecialise/ng",
  },
  laveLinge: {
    small: "/Asset/images_page_circuitspecialise/px.png",
    medium: "/Asset/images_page_circuitspecialise/0px.png",
    large: "/Asset/images_page_circuitspecialise/0px.png",
  },
};

export { ContentTextPageCircuitSpecialise, ContentImagePageCircuitSpecialise };
