//Tableau de contenu textuel de chaque page

//Import du module "LINK"
import { Link } from 'react-router-dom';

let ContentPagePC16A = {

      introductionTexte: (
        <div>
          <p className='text-intro-securite'>
            Avant toute intervention, veillez à mettre hors tension le circuit concerné au niveau du tableau de repartition et de vérifier ensuite l' absence de tension avec un VAT (vérificateur d'absence de tension) au point d' intervention.
          </p>
          <p className='text-intro-prise'>
            Rien de bien compliquer pour les prises de courant(PC), nous devons juste respecter les couleurs et de verifier
          </p>
        </div>
      ),
     
      collapsePrincipe: (
        <div className='principe'>
          <p>
            <Link to="/ddr">Le dispositif différentiel résiduel (DDR)</Link>
            assure la protection des personnes contre les contacts directs et
            indirects avec un conducteur actif.
          </p>
          <p>
            Dans notre exemple c' est un interrupteur différentiel haute
            sensibilité 63A 30mA.Ce dernier est placé en amont des différents
            circuits prises de courant.
          </p>
          <p>
            <Link to="/disjoncteur">Les disjoncteurs magnéto-thermique</Link>{" "}
            protègent notre installation contre les courts-circuits et
            surcharges.Le principe de câblage est simple, on doit respecter les
            couleurs.
          </p>
          <p>
            Dans la boite de dérivation on connecte les conducteurs de même type
            entre eux.Phase avec phase, neutre avec neutre, terre avec terre.
          </p>
        </div>
      ),

      collapsePrecaution: (
        <ul className='precaution'>
          <li key="1">section des conducteurs de 1.5mm² avec disjoncteur 16A max</li>
          <li key="2">section des conducteurs de 2.5mm² avec disjoncteur 20A max</li>
          <li key="3">Avec disjoncteur 16A et section 1.5mm² : 8 prises max</li>
          <li key="4">Avec disjoncteur 20A et section 2.5mm² : 12 prises max</li>
          <li key="5">Phase c'est rouge ou marron en général ou toute autre couleur sauf bleu et vert/jaune</li>
          <li key="6">Neutre c'est bleu obligatoirement</li>
          <li key="7">Terre c'est bicolor vert/jaune obligatoirement</li>
        </ul>
      ),
      collapseAstuce:(
        <div>
            <p>Il est vivement conseillé de connecter la phase sur la fiche droite(vue de face) de la prise.Pour cet exemple de cablâge de PC on utilise une section de 2.5mm² car il est de bon usage, de ne pas utiliser des conducteurs de 1.5mm² pour des PC.</p>
            <p>Le comptage des PC se fait socle par socle, même pour des boitiers munis de plusieurs prises.(voir schema equivalence pc)</p>
          </div>
      ),
      collapseSavoir: (
        
        <div>
          ya du taff
        </div>),
    
  
  
};

export {ContentPagePC16A}