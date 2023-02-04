//Contenu du quiz sur "les prises de courant et circuits spécialisés"



let ContentQuizPC = [
  {
    idQ: "pc1",
    textQuestion: "Est-il autorisé par la norme de réaliser un circuit prise avec du câble de 1.5mm",
    proposition1: "oui",
    proposition2: "non",
    goodresponse: "oui",
    textSolution: "Oui, en effet la NFC-1500 autorise de câbler un circuit prise en 1.5mm, mais avec un disjoncteur max de 16A."
    
  },

  {
    idQ: "pc2",
    textQuestion:
      "Quelle est la hauteur minimum en cm par rapport au sol pour implanter une prise dans un mur?",
    proposition1: "oui",
    proposition2: "10",
    proposition3: "15",
    proposition4: "20",
    proposition5: "non",
    goodresponse: "oui",
    textSolution: "5cm au dessus du sol fini est le minimum autorisé, bien qu'en pratique on est entre 30cm et 40cm du sol fini."
  },

  {
    idQ: "pc3",
    textQuestion:
      "Quelle est la hauteur minimum en cm par rapport au plan de travail pour implanter une prise dans la credense?",
    proposition1: "oups",
    proposition2: "10",
    proposition3: "15",
    proposition4: "3",
    proposition5: "",
    goodresponse: "oups",
    textSolution: "5cm est encore la bonne réponse"
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
    textSolution: "oui , 16A c' est le maximun autorisé"
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
    textSolution:"Toujours d' apres la NFC-1500 on peut aller jusqu'à 12 socles de prise avec un circuit câbler en 2.5 mm2"
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
    textSolution: "Interdiction absolue, un cable 1.5mm2 ne peut supporter un courant nominal supérieur à 16A"
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
    textSolution:"C' est la NFC-1500"
  },
];



export { ContentQuizPC };
