//« « « Contenu » »»des  "CGU"

//Import du module Link
import { Link } from "react-router-dom";

let CGUContent = [
  {
    title: "Définition",
    content: (
      <dl>
        <dt>Est défini comme « Service »:</dt>
        <dd>
          Le site internet accessible à l'adresse
          <Link to="/"> www.elec-travaux.com</Link>
        </dd>

        <dt>Est défini comme « Contenu »:</dt>
        <dd>
          Toutes données disponibles sur le « Service » ou émanant de celui-ci.
        </dd>

        <dt>Est défini comme « Editeur »:</dt>
        <dd>Le créateur et l'éditeur du site internet "elec-travaux.com".</dd>

        <dt>Est défini comme « Utilisateur »:</dt>
        <dd>
          Toute personne morale ou physique qui utilise le « Service » ou «
          Contenu ».
        </dd>
      </dl>
    ),
  },
  {
    title: "Objet",
    content: (
      <p>
        Les présentes « <stong>conditions générales d'utilisation</stong> » ou «{" "}
        <strong>CGU</strong> » ont pour objet l'encadrement juridique de
        l’utilisation du site '<strong>elec-travaux.com</strong>' et de ses
        services. Ce contrat est conclu entre :« l’Éditeur » et « l’Utilisateur
        ». Les « <strong>CGU</strong> » doivent être acceptées par tout «
        Utilisateur », et son accès au site vaut acceptation de ces conditions.
        Les présentes « <strong>CGU</strong> » sont régies par les lois
        françaises quel que soit le lieu d’utilisation du service. Toute
        contestation ou tout litige qui pourraient naître entre l'« Editeur » et
        l'« Utilisateur », et après l’échec de toute tentative de recherche de
        solutions amiable, seront de la compétence exclusive des tribunaux dont
        dépend le lieu de residence de l'« Editeur ».La langue de référence,
        pour le règlement de contentieux éventuels, est le français.
      </p>
    ),
  },

  {
    title: "Mentions légales",
    content: (
      <p>
        Le site web '<strong>elec-travaux.com</strong>' est édité par Guy&Jack
        Dev-Web
        <br></br>
        L' hébergeur du site est:
      </p>
    ),
  },
  {
    title: "Précautions",
    content:
      "L'électricité peut occasionner de multiples accidents. Avant toute intervention, veuillez mettre hors tension le circuit concerné au niveau du tableau de répartition et vérifier ensuite l'absence de tension avec un VAT (Vérificateur d'Absence de Tension) au point d'intervention. Utilisez du matériel marqué CE ou NF. Utilisez tous les équipements de protection individuelle ou EPI nécessaires à la réalisation des travaux. Etre sûr de maitriser la manipulation des outils et des instruments de mesure. L'« Utilisateur » reste le seul maître de la bonne utilistion du « Contenu » diffusé ou émanant du « Service ».",
  },

  {
    title: "Accès au « Service »",
    content:
      "Le « Service » est accessible gratuitement à tout « Utilisateur » disposant d'un accès à internet. Tous les coûts afférents à l'accès au « Service », que ce soient les frais matériels, logiciels ou d'accès à internet, sont exclusivement à la charge de l'« Utilisateur ». Il est seul responsable du bon fonctionnement de son équipement informatique, logiciel et mise à jour, ainsi que de son accès à internet. L’Editeur et ses éventuels partenaires s’efforcent de permettre un accès de qualité au « Service », sauf en cas de force majeure ou d’un événement hors du contrôle de ceux-ci et sous réserve des éventuelles pannes et interventions de maintenance nécessaire au bon fonctionnement du « Service » ainsi que de tout dysfonctionnement du réseau ou des serveurs ou de tout autre événement. Par conséquent, l’Editeur et ses éventuels partenaires ne peuvent garantir une disponibilité du « Service » / « Contenu », une fiabilité des transmissions et des performances en matière de temps de réponse ou de qualité. Par ailleurs, l’ « Editeur » et ses éventuels partenaires se réservent la possibilité d'interrompre, de suspendre, de modifier ou arrêter tout ou partie du « Service » ou de son accès, à tout moment sans préavis afin d'en assurer la maintenance, ou pour toute autre raison, le tout sans droit à indemnités ou obligation. La responsabilité de l’Editeur et de ses éventuels partenaires ne saurait être engagée en cas d’impossibilité d’accès et/ou d’utilisation du « Service » / « Contenu » et ceci pour n’importe quelle durée ainsi que d’une mauvaise utilisation du service ou des conséquences qui peuvent en découler pour l’Utilisateur ou tout tiers. De plus, il n’est prévu aucune assistance technique, de quelque nature que ce soit, vis-à-vis de l’Utilisateur. Il n'est concédé à l'« Utilisateur » qu'une autorisation de consultation du « Service » / « Contenu » qu'à titre personnel et privé, à l'exclusion de toute visualisation ou diffusion publique. Toute consultation publique devra faire preuve d’une demande préalable auprès de l’Editeur.",
  },

  {
    title: "Responsabilité de l’Utilisateur",
    content: (
      <p>
        L'« Utilisateur » est responsable des risques liés à l’utilisation de
        son identifiant de connexion et de son mot de passe. Le mot de passe de
        l’Utilisateur doit rester secret. En cas de divulgation du mot de passe,
        l’Éditeur décline toute responsabilité. L’Utilisateur assume l’entière
        responsabilité de l’utilisation qu’il fait des informations et contenus
        présents sur le site '<strong>elec-travaux.com</strong>'. Tout usage du
        service par l'« Utilisateur » ayant directement ou indirectement pour
        conséquence des dommages doit faire l'objet d'une indemnisation au
        profit du site. L'« Editeur » permet aux membres de publier des
        commentaires sur le site . Le membre s’engage à tenir des propos
        respectueux des autres et de la loi et accepte que ces publications
        soient modérées ou refusées par l’Éditeur, sans obligation de
        justification. En publiant sur le site, l’Utilisateur cède à la société
        éditrice le droit non exclusif et gratuit de représenter, reproduire,
        adapter, modifier, diffuser et distribuer sa publication, directement ou
        par un tiers autorisé. L’Éditeur s'engage toutefois à citer le membre en
        cas d’utilisation de sa publication.
      </p>
    ),
  },
  {
    title: "Responsabilité de l’Éditeur",
    content: (
      <p>
        Tout dysfonctionnement du serveur ou du réseau ne peut engager la
        responsabilité de l’Éditeur. De même, la responsabilité du site ne peut
        être engagée en cas de force majeure ou du fait imprévisible et
        insurmontable d'un tiers. Le site '<strong>elec-travaux.com</strong>'
        s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la
        sécurité et la confidentialité des données. Toutefois, il n’apporte pas
        une garantie de sécurité totale. L’Éditeur se réserve la faculté d’une
        non-garantie de la fiabilité des sources, bien que les informations
        diffusées su le site soient réputées fiables.
      </p>
    ),
  },
  {
    title: "Limite de responsabilite",
    content: (
      <div>
        <p>
          Le « Contenu » diffusé ou émanant du « Service » provient de sources
          réputées fiables et il est un point d’honneur à ce que le « Contenu »
          fasse preuve d’exactitude, soit précis et à jour. Néanmoins, l’Editeur
          ne peut garantir et il ne peut être exclu que ce « Contenu » soit
          susceptible de contenir d’éventuelles erreurs* (inexactitudes, fautes,
          oublis, lacunes etc. qu’elles soient techniques et/ou typographiques
          dues à des omissions, négligences, défauts d’interprétations, absence
          prolongée involontaire etc. (liste d’exemple non exhaustive))
          (l’Editeur se réservant le droit de toute correction et modification
          et à tout moment).<br></br> De plus, le « Contenu » de toute nature et
          sur tous supports, émanant du « Service » est uniquement et purement
          donné à titre informatif ou indicatif étant non contractuel et non
          exhaustif. Toutes informations d'ordre technique ou règlementaire et
          normatif pouvant être recueillies dans le « Contenu » / « Service »
          n'ont aucun caractère formel et ne sauraient engager la responsabilité
          de l’Editeur. Il appartient par conséquent à chaque « Utilisateur » de
          vérifier l'exactitude et la pertinence des informations et
          renseignements mis à sa disposition et qu'il pourrait obtenir dans le
          « Contenu » / « Service » ou émanant de celui-ci avant de les utiliser
          dans une quelconque application.
        </p>
        <p>
          En conséquence, L’Editeur ne peut donc, en aucun cas, engager sa
          responsabilité à quelque titre que ce soit. L'utilisation du « Contenu
          » de toute nature et sur tout support qu’il soit, présent ou émanant
          du « Service » et ceci de n’importe quelle manière, se fait sous
          l’entière et seule responsabilité de l’Utilisateur.<br></br>{" "}
          L’Utilisateur assume la totalité des conséquences pouvant en découler,
          sans que l’Editeur puisse être recherché à quelque titre que ce soit
          et sans recours contre ce dernier, celui-ci ne pouvant en aucun cas
          être tenu responsable de tout dommage de quelque nature qu’il soit
          résultant de l’interprétation ou de l’utilisation du « Contenu »
          disponible ou émanant du « Service », de même des informations
          consultées qui ne répondraient pas à l’objectif pour lesquel elles ont
          été consultées.<br></br> L’Editeur ne saurait être tenu pour
          responsable des conséquences liées aux éventuelles erreurs,
          inexactitudes, carences ou autres, mais également de l’utilisation et
          des données, quel qu’elles soient, présentes dans le « Contenu » et/ou
          « Service » ou émanant de celui-ci, des atteintes aux droits de
          tierces personnes qui pourraient résulter de cette utilisation et de
          tout préjudice direct ou indirect pouvant en découler. De plus, l'«
          Utilisateur » s'engage à indemniser l’Editeur de toutes conséquences
          dommageables liées directement ou indirectement à l'usage qu'il fait
          du « Contenu » et/ou du « Service ».<br></br> L’Editeur ne saurait
          être, également, tenu pour responsable, de n’importe quelle nature
          qu’il soit ainsi que des dommages et des préjudices s'y afférant,
          directs ou indirects, matériels ou immatériels, des renseignements,
          informations, utilisations et contenus présents sur les liens d’autres
          sites ou sources externes référencés dans le « Service » et/ou «
          Contenu »
        </p>
      </div>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <p>
        Les contenus du site '<strong>elec-travaux.com</strong>' (logos, textes,
        éléments graphiques, vidéos, etc.) sont protégés par le droit d’auteur,
        en vertu du Code de la propriété intellectuelle. L’Utilisateur devra
        obtenir l’autorisation de l’Editeur du site avant toute reproduction,
        copie ou publication de ces différents contenus. Ces derniers peuvent
        être utilisés par l'« Utilisateur » à des fins privées; tout usage
        commercial est interdit. L’Utilisateur est entièrement responsable de
        tout contenu qu’il met en ligne et il s’engage à ne pas porter atteinte
        à un tiers. L’Éditeur du site se réserve le droit de modérer ou de
        supprimer librement et à tout moment les contenus mis en ligne par l'«
        Utilisateur », et ce, sans justification.
      </p>
    ),
  },

  {
    title: "Données personnelles",
    content: (
      <p>
        L’Utilisateur doit obligatoirement fournir des informations personnelles
        pour procéder à son inscription sur le site. L’adresse électronique
        (e-mail) de l’Utilisateur pourra notamment être utilisée par le site
        'elec-travaux.com' pour la communication d’informations diverses et la
        gestion du compte.'elec-travaux.com' garantit le respect de la vie
        privée de l’Utilisateur, conformément à la loi n°78-17 du 6 janvier 1978
        relative à l'informatique, aux fichiers et aux libertés. Le site est
        déclaré auprès de la CNIL sous le numéro suivant : [numéro]. En vertu
        des articles 39 et 40 de la loi en date du 6 janvier 1978, l'«
        Utilisateur » dispose d'un droit d'accès, de rectification, de
        suppression et d'opposition de ses données personnelles.<br></br>
        L'« Utilisateur » exerce ce droit via :
        <ul>
          <li>Un formulaire de contact</li>
        </ul>
      </p>
    ),
  },

  {
    title: "Liens hypertextes",
    content:
      "L'« Editeur » propose des liens hypertextes vers des sites web édités et/ou gérés par des tiers. Dans la mesure où aucun contrôle n'est exercé sur ces ressources externes, l'« Utilisateur » reconnaît que l'« Editeur » n'assume aucune responsabilité relative à la mise à disposition de ces ressources et ne peut être tenu responsable quant à leur contenu. Les liaisons du type hypertexte vers le « Service » ou ses pages sont autorisées sous réserve que ces liens ouvrent dans une nouvelle fenêtre.",
  },
  {
    title: "Évolution des conditions générales d’utilisation",
    content: (
      <div>
        Le site '<strong>elec-travaux.com</strong>' se réserve le droit de
        modifier les clauses de ces conditions générales d’utilisation à tout
        moment et sans justification.
      </div>
    ),
  },
  {
    title: "Durée du contrat",
    content:
      "La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'« Utilisateur » à compter du début de l’utilisation du « Service ».",
  },
  {
    title: "Droit applicable et juridiction compétente",
    content:
      "Le présent contrat dépend de la législation française.En cas de litige non résolu à l’amiable entre l’Utilisateur et l’Éditeur, les tribunaux du lieu de residence de l'« Editeur » du site sont compétents pour régler le contentieux.",
  },
];

export { CGUContent };
