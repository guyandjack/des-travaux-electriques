/*************************************************************************************************************
 *        expressions regulieres utilises pour le controles des donnees utilisteurs issues du formulaire
 * ************************************************************************************************************/

  
//Motif qui autorise lettres majuscules, minuscules, undescore, apostrophe,point, et trait d'union.entre 2 et 20 carracteres.
const masqueText = /^[A-Za-z_'.-]{2,30}$/;



//Motif qui autorise un nombre ou un chiffre
const masqueNumber = /^[0-9]{1,4}$/;


//Motif qui autorise lettres majuscules / minuscules / nombres entre 2 et 20 carracteres.
const masqueAlphaNumerique = /^[0-9A-Za-z_'.-]{2,30}$/;


//Motif qui autorise une adresse mail qui peut commencer par:
//0 ou 4 chiffres
//suivi de lettres minuscules,ou underscore, ou point, ou trait d'union, ou apostrophe entre 2 et 10 carracteres
//suivi d' un arobase
//suivi de lettres minuscules,ou underscore, ou point, ou trait d'union entre, ou apostrophe, virgule, point-virgule, double point 2 et 10 carracteres
//suivi d' un point
//suivi de lettres minuscules ou majuscules entre 2 et 10 caracteres
const masqueMail = /^[0-9]{0,4}[0-9a-z_'.-]{2,30}@[0-9a-z_'.-]{2,20}\.[0-9a-zA-Z_'.-]{2,15}$/;


//motif qui autorise "o" suivi de "k"
const masqueCheckBox = /^[o][k]$/;


//Motif qui autorise des nombres, lettres minuscules et majuscules, point, trait d'union, apotrophe, espace et underscore, retour a la ligne de 10 a 200 caracteres
const masqueMessage = /^[0-9A-Za-z_'.-;,:éàè?!ç\n\s ]{10,200}$/;

module.exports = {
    masquetext: masqueText,
    masquenumber: masqueNumber,
    masquealphanumerique: masqueAlphaNumerique,
    masquemail: masqueMail,
    masquecheckbox: masqueCheckBox,
    masquemessage: masqueMessage
};