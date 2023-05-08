//contenu textuel de la page "Prise de courant"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../../Style/CSS/content_page_pc.css";

/*** contenu textuel de la page ******* */
let ContentTextPagePC16A = {
  introductionTexte: (
    <p>
      Avant toute intervention, veuillez mettre hors tension le circuit concerné
      au niveau du <Link to="/tgbt"> tableau de répartition </Link> et vérifier ensuite l'absence de tension avec un VAT (Vérificateur d'Absence
      de Tension) au point d'intervention.
    </p>
  ),

  collapseDescription: (
    <ol className="description">
      <li className="description__li">Fiche de connexion à la terre</li>
      <li className="description__li">
        Obturateur de sécurité, pour éviter les contacts directs avec les fiches
      </li>
      <li className="description__li">
        Puits de sécurité, pour éviter les contacts directs avec les fiches mâles
        lors de la connexion.
      </li>
      <li className="description__li">
        La lettre " T " indique la connexion avec la terre.
      </li>
      <li className="description__li">
        La lettre " L " indique la connexion avec la phase.
      </li>
      <li className="description__li">Levier de déconnexion.</li>
      <li className="description__li">
        Connecteur rapide, pas besoin d'outils pour connecter ou déconnecter
        le câble électrique
      </li>
      <li className="description__li">
        La lettre " N " indique la connexion avec le neutre.
      </li>
      <li className="description__li">Matériel certifié NF (Norme Francaise)</li>
      <li className="description__li">
        Tension et courant maximal d'utilisation
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
        Dans notre exemple c'est un interrupteur différentiel haute sensibilité
        63A 30mA.Ce dernier est placé en amont du circuit 1 et circuit 2.
      </p>
      <p className="principe__text">
        <Link to="/disjoncteur">Les disjoncteurs magnéto-thermiques </Link>
        protègent notre installation contre les courts-circuits et surcharges.
      </p>
      <p className="principe__text">
        Le principe de câblage est simple, on doit respecter les couleurs. Dans
        la boite de dérivation on connecte les conducteurs de même type entre
        eux. Phase avec phase, neutre avec neutre, terre avec terre.
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
          Si utilisation d'une section de
          <span className="important"> 1.5mm² </span>, on peut placer un
          <span className="important"> disjoncteur de 16A max.</span>
        </li>
        <li key="2" className="precaution__li">
          Si utilisation d'une section de
          <span className="important"> 2.5mm² </span> , on peut placer un
          <span className="important"> disjoncteur de 20A max </span>.
        </li>
        <li key="3" className="precaution__li">
          Avec un disjoncteur 16A et une section 1.5mm² on peut placer 8 prises
          max.
        </li>
        <li key="4" className="precaution__li">
          Avec un disjoncteur 20A et une section 2.5mm² on peut placer 12 prises max.
        </li>
        <li key="5" className="precaution__li">
          Phase c'est marron en général ou toute autre couleur sauf bleu, vert,
          jaune, bicolore vert/jaune.
        </li>
        <li key="6" className="precaution__li">
          Neutre c'est obligatoirement bleu .
        </li>
        <li key="7" className="precaution__li">
          Terre c'est obligatoirement bicolore vert/jaune .
        </li>
      </ul>
    </div>
  ),
  collapseAstuce: (
    <div className="astuce">
      <p className="astuce__text">
        Dans la pratique on utilise uniquement des conducteurs de 2.5mm² pour un
        circuit PC (même si la norme autorise du 1.5mm²).
      </p>

      <p className="astuce__text">
        Le comptage des prises se fait socle par socle, même pour des boîtiers
        munis de plusieurs prises (voir schéma équivalence PC).
      </p>

      <p className="astuce__text">
        Pour les locaux humides et à l'extérieur, utilisez des prises étanches
        avec un<Link to="/ip"> indice de protection </Link> IPX4, voire IPX5 si
        l'emplacement est susceptible d'être arrosé au jet d'eau.
      </p>

      <p className="astuce__text">
        Dans la pratique, la hauteur d'implantation des prises est autour de
        35cm. Pensez à votre vieux dos...
      </p>

      <p className="astuce__text">
        Dans les pièces qui contiennent une douche ou une baignoire, pensez à implanter
        vos prises <Link to="/sdb">"Hors Volume"</Link>. Sauf la prise rasoir,
        qui peut être en <Link to="/sdb"> "volume 2" </Link>si elle est alimentée
        par un transformateur d'isolation.
      </p>
    </div>
  ),
  collapseSavoir: (
    <div className="savoir">
      <p className="savoir__text">
        La hauteur minimale de l'axe d'une prise est de 5cm par rapport au sol
        fini.
      </p>
      <p className="savoir__text">
        Même hauteur pour une prise au-dessus du plan de travail de la cuisine.
      </p>
      <p className="savoir__text">
        Cette hauteur est augmentée à 12cm pour un boîtier de prise 32A (plaque
        de cuisson).
      </p>

      <p className="savoir__text">
        Pour les locaux comme la véranda, le sous-sol, le vide sanitaire, la buanderie ainsi qu'à
        l'extérieur, un<Link to="/ip"> indice de protection </Link>adapté est
        exigé pour les appareillages.
      </p>
    </div>
  ),
};

/**** url des contenus media de la page ***** */

let ContentImagePagePC16A = {
  pc_front_face: {
    small: "/Asset/images_page_pc_16A/pc16A-front-500px.png",
    medium: "/Asset/images_page_pc_16A/pc16A-front-500px.png",
    large: "/Asset/images_page_pc_16A/pc16A-front-500px.png",
  },
  pc_back_face: {
    small: "/Asset/images_page_pc_16A/pc16A-back-500px.png",
    medium: "/Asset/images_page_pc_16A/pc16A-back-500px.png",
    large: "/Asset/images_page_pc_16A/pc16A-back-500px.png",
  },
  schema_pc: {
    small: "/Asset/images_page_pc_16A/schema-pc-600px.png",
    medium: "/Asset/images_page_pc_16A/schema-pc-1000px.png",
    large: "/Asset/images_page_pc_16A/schema-pc-1500px.png",
  },
  comptage_pc: {
    small: "/Asset/images_page_pc_16A/comptage-prise-600px.png",
    medium: "/Asset/images_page_pc_16A/comptage-prise-1000px.png",
    large: "/Asset/images_page_pc_16A/comptage-prise-1000px.png",
  },
};

export { ContentTextPagePC16A, ContentImagePagePC16A };
