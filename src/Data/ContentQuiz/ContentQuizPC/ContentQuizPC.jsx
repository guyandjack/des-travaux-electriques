//Contenu du quiz sur "les prises de courant et circuits spécialisés"

//Import de composants enfants
import { QuizQuestion } from "../../../Components/QuizQuestion/QuizQuestion.jsx";

let ContentQuizPC = [
  {
    idQ: "pc1",
    textQuestion: "Est-il autorisé par la norme de réaliser un circuit prise avec du câble de 1.5mm",
    proposition1: "oui",
    proposition2: "non",
    goodresponse: "oui",
  },

  {
    idQ: "pc2",
    textQuestion:
      "Quelle est la hauteur minimum en cm par rapport au sol pour implanter une prise dans un mur?",
    proposition1: "5",
    proposition2: "10",
    proposition3: "15",
    proposition4: "20",
    proposition5: "40",
    goodresponse: "5",
  },

  {
    idQ: "pc3",
    textQuestion:
      "Quelle est la hauteur minimum en cm par rapport au plan de travail pour implanter une prise dans la credense?",
    proposition1: "5",
    proposition2: "10",
    proposition3: "15",
    proposition4: "3",
    proposition5: "",
    goodresponse: "5",
  },

  {
    idQ: "pc4",
    textQuestion:
      "Peut on utiliser un disjoncteur magnétothermique inférieur à 16A pour un circuit prise câbler en 1.5mm2",
    proposition1: "oui",
    proposition2: "non",
    proposition3: "",
    proposition4: "",
    proposition5: "",
    goodresponse: "oui",
  },

  {
    idQ: "pc5",
    textQuestion:
      "Combien de socles de prise peut-on installer avec un disjoncteur de 20A en amont du circuit?",
    proposition1: "6",
    proposition2: "8",
    proposition3: "10",
    proposition4: "12",
    proposition5: "16",
    goodresponse: "12",
  },

  {
    idQ: "pc6",
    textQuestion:
      "Peut on utiliser un disjoncteur de 20A sur un circuit prise câblé en 1.5mm2 ?",
    proposition1: "oui d' après la norme",
    proposition2: "non la norme l'interdit",
    proposition3: "oui sous certaines conditions",
    proposition4: "c'est limite mais ca passe",

    goodresponse: "non la norme l'interdit",
  },

  {
    idQ: "pc7",
    textQuestion:
      "Quelle est la norme qui défini les installations électriques d' une maison individuelle ou local commercial recevant du public?",
    proposition1: "NFC-1400",
    proposition2: "NFC-1500",
    proposition3: "NFC-14500",
    proposition4: "NFC-15500",
    goodresponse: "NFC-1500",
  },
];



export { ContentQuizPC };
