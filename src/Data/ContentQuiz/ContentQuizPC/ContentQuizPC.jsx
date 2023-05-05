//Contenu du quiz sur "les prises de courant"


let ContentQuizPC = [
  {
    idQ: "pc1",
    textQuestion:
      "Est-il autorisé de réaliser un circuit prise avec une section de câble de 1.5mm² ?",
    proposition1: "oui",
    proposition2: "non",
    goodresponse: "oui",
    textSolution:
      "Oui, en effet la NFC-1500 autorise de câbler un circuit prise avec une section de 1.5mm²./n Ce circuit devra être protégé en amont avec un disjoncteur de 16A max.",
  },

  {
    idQ: "pc2",
    textQuestion:
      "Quelle est la hauteur minimum, en cm par rapport au sol fini, pour implanter une prise 16A ?",
    proposition1: "5",
    proposition2: "10",
    proposition3: "12",
    proposition4: "20",
    proposition5: "25",
    goodresponse: "5",
    textSolution:
      "5cm au dessus du sol fini est le minimum autorisé. Pour une question de confort et d'ergonomie on positionne le prises entre 20cm et 40cm du sol fini.",
  },

  {
    idQ: "pc3",
    textQuestion:
      "Quelle est la hauteur minimum, en cm par rapport au plan de travail de la cuisine, pour implanter une prise dans une crédense ?",
    proposition1: "5",
    proposition2: "10",
    proposition3: "15",
    proposition4: "3",
    proposition5: "",
    goodresponse: "5",
    textSolution: "5cm est encore la bonne réponse.",
  },

  {
    idQ: "pc4",
    textQuestion:
      "Peut-on utiliser un disjoncteur magnétothermique inférieur à 16A, pour protéger un circuit prise câblé avec une section de 1.5mm² ?",
    proposition1: "oui",
    proposition2: "non",
    proposition3: "",
    proposition4: "",
    proposition5: "",
    goodresponse: "oui",
    textSolution:
      "oui , 16A c' est le maximun autorisé. En pratique les circuits prises utilisent une section de 2.5mm².",
  },

  {
    idQ: "pc5",
    textQuestion:
      "Quel est le nombre maximal de prises, pour un circuit réalisé avec une section de 2.5mm² et protégé en amont par un disjoncteur de 20A ?",
    proposition1: "6",
    proposition2: "8",
    proposition3: "10",
    proposition4: "12",
    proposition5: "16",
    goodresponse: "12",
    textSolution:
      "Toujours d'aprés la NFC-1500 on peut aller jusqu'à 12 socles de prises avec un circuit câblé en 2.5 mm².",
  },

  {
    idQ: "pc6",
    textQuestion:
      "Peut on utiliser un disjoncteur magnétothermique de 20A sur un circuit câblé en 1.5mm² ?",
    proposition1: "oui d' après la norme",
    proposition2: "non la norme l'interdit",
    proposition3: "oui sous certaines conditions",
    proposition4: "c'est limite mais ca passe",

    goodresponse: "non la norme l'interdit",
    textSolution:
      "Interdiction absolue, une section de câble de 1.5mm² ne peut supporter sans risque, un courant nominal supérieur à 16A.",
  },

  {
    idQ: "pc7",
    textQuestion:
      "Quelle est la norme qui défini les installations électriques privatives d'une maison individuelle ou local commercial ?",
    proposition1: "NFC-1400",
    proposition2: "NFC-1500",
    proposition3: "NFC-14500",
    proposition4: "NFC-15500",
    goodresponse: "NFC-1500",
    textSolution:
      "C' est la NFC-1500 qui s' applique à partir du point de livraison et qui couvre l' ensemble du domaine privé.",
  },

  {
    idQ: "pc8",
    textQuestion:
      "Quel est le nombre maximal de prises pour un circuit câblé en 1.5 mm² ?",
    proposition1: "6",
    proposition2: "8",
    proposition3: "10",
    proposition4: "12",
    goodresponse: "8",
    textSolution: "'8' c' est le nombre max  de socle dans ce cas.",
  },

  {
    idQ: "pc9",
    textQuestion:
      "Pour une salle de bain, dans quel volume est-il autorisé d' installer un socle de prise 16A ?",
    proposition1: "Volume 0",
    proposition2: "Volume 1",
    proposition3: "Volume 2",
    proposition4: "Volume caché",
    proposition5: "Hors volume",
    goodresponse: "Hors volume",
    textSolution:
      "En effet c' est 'hors volume' que l' on peut insaller ce genre de prise.",
  },

  {
    idQ: "pc10",
    textQuestion:
      "Pour une salle de bain, dans quel volume est-il autorisé d' installer une prise rasoir équipé d'un transformateur de séparation ?",
    proposition1: "Volume 0",
    proposition2: "Volume 1",
    proposition3: "Volume 2",
    proposition4: "Volume caché",
    goodresponse: "Volume 2",
    textSolution:
      "C' est dans le volume 2 et forcément  hors volume que c' est autorisé.",
  },
];



export { ContentQuizPC };
