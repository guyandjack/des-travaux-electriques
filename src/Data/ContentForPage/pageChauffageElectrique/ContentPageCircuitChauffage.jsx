//contenu textuel de la page "Chauffage-electrique"

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../../Style/CSS/content_page_circuit_chauffage_electrique.css";

/*** contenu textuel de la page ******* */
let ContentTextPageCircuitChauffage = {
  collapsePrincipe: (
    <div className="principe">
      <p className="principe__text">
        <Link to="/ddr">Le dispositif différentiel résiduel (DDR) </Link>
        assure la protection des personnes contre les contacts directs et
        indirects avec un conducteur actif.
      </p>
      <p className="principe__text">
        Dans notre exemple c' est un interrupteur différentiel de type AC, avec
        un courant assigné max de 63A, et une sensibilite de 30mA.Ce dernier est
        placé en amont du circuit 1 et 2.
      </p>
      <p className="principe__text">
        <Link to="/disjoncteur">Les disjoncteurs magnétothermiques </Link>
        protègent nos circuits contre les courts-circuits et surcharges.
      </p>
      <p className="principe__text">
        Les disjoncteurs sont « dédiés », au circuit chauffage.Ils alimentent
        uniquement des radiateurs. Un même circuit de chauffage peut compter
        plusieurs radiateurs.
      </p>
      <p className="principe__text">
        Pour cet exemple de cablâge de chauffage on utilise deux dispositifs de
        protection. En effet ici la puissance de l' ensemble des radiateurs est
        de (2 * 2000) + (1 * 1500) = 5500w (5.5Kw).
      </p>
      <p className="principe__text">
        Un disjoncteur de 20A peut etre utilisé avec un consomateur de 230 * 20
        = 4,600w (4.6Kw). Il nous faut rajouter un disjoncteur pour protéger le
        circuit du dernier radiateur.
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
          <span className="important"> disjoncteur max de 20A</span>
        </li>
        <li key="1" className="precaution__li">
          Utilisation d' une section de
          <span className="important"> 1.5mm²</span> avec un
          <span className="important"> disjoncteur max de 16A</span>
        </li>

        <li key="5" className="precaution__li">
          Phase c'est marron en général ou toute autre couleur sauf bleu, vert,
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
        On n'utilise jamais un disjoncteur au maximum de sa puissance.On garde
        toujours une marge de securité pour éviter des disfonctionnements
        intempestifs. On créer un nouveau circuit avec un autre disjoncteur pour
        délester le premier. Garder vous 20% de marge cela me parait judicieux.
      </p>
      <p className="astuce__text">
        Un radiateur électrique fixe, ne se branche jamais sur une prise de
        courant classique 16A. Il doit être branché sur une sortie de câble .
      </p>
    </div>
  ),
  collapseSavoir: (
    <div className="savoir">
      <p className="savoir__text">
        Les radiateurs électriques sont trés énergivores, même si des progrès
        ont été réalisé sur les rendements.Pour économiser sur le chauffage il
        faut d' abord isoler correctement votre logement (plafond, mur, sol..)
        et ventiler avec une VMC pour évacuer l'humudité ambiante.
      </p>
      <p className="savoir__text">
        Une piece humide doit être chauffée à une température plus élevée pour
        un même confort ressenti dans une piéce sans humidité.
      </p>
    </div>
  ),
};

/**** url des contenus media de la page ***** */

let ContentImagePageCircuitChauffage = {
  schema_circuit_chauffage: {
    small: "/Asset/images_page_circuit_chauffage/schema-chauffage-600px.png",
    medium: "/Asset/images_page_circuit_chauffage/schema-chauffage-1000px.png",
    large: "/Asset/images_page_circuit_chauffage/schema-chauffage-1500px.png",
  },
};

export { ContentTextPageCircuitChauffage, ContentImagePageCircuitChauffage };
