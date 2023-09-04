/*************************************************************************************************************
 *        expressions regulieres utilises pour le controles des donnees utilisteurs issues du formulaire
 * ************************************************************************************************************/

/**** Permet le controle des inputs "lastname", "firstname" ********/

//Motif qui autorise lettres majuscules, minuscules, undescore,
//apostrophe, point, trait d'union et tout caractére d' espacement
//Nombre de carracteres compris entre  2 et 50.
const masqueText = /^[A-Za-z_'.-\s]{2,50}$/;

/***** Permet le controle d' une input caché "response" ***********/

//Motif qui autorise un nombre ou un chiffre
//nombres de carractere compris entre 1 et 4.
const masqueNumber = /^([-][1]|[0-9]{0,4})$/;

/***** Permet le controle d' une input caché "refpage" ***********/

//Motif qui autorise un nombre ou un chiffre, lettres majuscules et minuscules,
//underscore, apostrophe, point, trait d'union
//nombres de carractere compris entre 2 et 30.
const masqueAlphaNumerique = /^[0-9A-Za-z_'.-]{2,30}$/;

/***** Permet le controle d'une input  "email" ***********/

//Motif "facultatif" qui autorise un nombre ou un chiffre entre 0 et 4 carracteres
//suivi dun motif "obligatoire" contenant soit des chiffres, lettres minuscules, underscore, apostrophe, trait d'union,  entre 2 et 30 carracteres
//suivi d'un arobase "obligatoire"
//suivi d'un motif "obligatoire" contenant soit des chiffres, lettres minuscules, underscore, apostrophe, trait d'union,  entre 2 et 20 carracteres
//suivi d'un point "obligatoire"
//suivi d'un motif" obligatoire" contenant soit des chiffres, lettres minuscules ou majuscules, underscore, apostrophe,point,trait d'union entre 2 et 15 caracteres
const masqueMail = /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,20}\.[0-9a-zA-Z_'.-]{2,15}$/;

/***** Permet le controle d'une input  "dataUser" ***********/

//motif qui autorise strictement deux lettres minuscules
//soit "n" "o" (no)
//soit "o" "k" (ok)
const masqueCheckBox = /^([n][o]|[o][k])$/;

/***** Permet le controle de l' input "content" (le corps du message)  **********/

//Motif qui autorise tous les carracteres à l' exeption des balises ouvrantes, accolades, crochets, signe multiplié et signe logique (ou)
const masqueMessage = /^[^<>{}\[\]*|]{20,200}$/;

module.exports = {
  masquetext: masqueText,
  masquenumber: masqueNumber,
  masquealphanumerique: masqueAlphaNumerique,
  masquemail: masqueMail,
  masquecheckbox: masqueCheckBox,
  masquemessage: masqueMessage,
};
