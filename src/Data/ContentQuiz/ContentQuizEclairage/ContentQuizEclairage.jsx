//Contenu du quiz sur le "Circuit eclairage"

let ContentQuizEclairage = [
  {
    idQ: "ecl1",
    textQuestion:
      "Généralement, quelle est la valeur du disjoncteur pour un circuit éclairage ?",
    proposition1: "16A",
    proposition2: "20A",
    proposition3: "10A",
    proposition4: "",
    proposition5: "",
    goodresponse: "10A",
    textSolution:
      "Le circuit éclairage est généralement protégé par un disjoncteur de 10A.",
  },

  {
    idQ: "ecl2",
    textQuestion:
      "Quel est le nombre maximal de points d'utilisations par circuit d'éclairage ?",
    proposition1: "5",
    proposition2: "10",
    proposition3: "8",
    proposition4: "8",
    proposition5: "8",
    goodresponse: "8",
    textSolution: "8 est lenombre maximal",
  },

  {
    idQ: "ecl3",
    textQuestion:
      "Quelle est la puissance maximal est autorisée par point d'éclairage dans un même local?",
    proposition1: "150 VA",
    proposition2: "250 VA",
    proposition3: "50 VA",
    proposition4: "300 VA",
    proposition5: "",
    goodresponse: "5",
    textSolution: "300 VA.",
  },

  {
    idQ: "ecl4",
    textQuestion:
      "Que permet le montage d'un circuit avec des interrupteurs va et vient ?",
    proposition1:
      "Cela permet de commander un foyer lumineux de trois endroits différents.",
    proposition2:
      "Cela permet de commander un foyer lumineux seulement de deux endroits différents.",
    proposition3: "",
    proposition4: "",
    proposition5: "",
    goodresponse:
      "Cela permet de commander un foyer lumineux seulement de deux endroits différents.",
    textSolution: "Uniquement de deux endroits.",
  },

  {
    idQ: "ecl5",
    textQuestion:
      "Quelle est la section minimale des conducteurs pour réaliser un circuit éclairage ?",
    proposition1: "1 mm²",
    proposition2: "1.5 mm²",
    proposition3: "2.5 mm²",
    proposition4: "",
    proposition5: "",
    goodresponse: "1.5 mm²",
    textSolution:
      "D'aprés la NFC-1500, la section minimale est de 1.5 mm² pour un circuit éclairage.",
  },

  {
    idQ: "ecl6",
    textQuestion:
      "Quels sont les réglages présents sur la majorité des détecteurs de présence ?",
    proposition1: "Durée, sensibilité, exposition",
    proposition2: "",
    proposition3: "oui, sous certaines conditions",
    proposition4: "c'est limite mais ca passe",
    goodresponse: "Durée, sensibilité, exposition",
    textSolution:
      "Interdiction absolue, une section de câble de 1.5mm² ne peut supporter sans risque, un courant nominal supérieur à 16A.",
  },

  {
    idQ: "ecl7",
    textQuestion:
      "Quelle est la différence principale pour un bouton poussoir par rapport à un interrupteur ?",
    proposition1: "Aucune, ils fonctionnent de la même façons",
    proposition2:
      "Le bouton poussoir revient dans sa position initiale aprés une pression.",
    proposition3:
      "Le bouton poussoir commande uniquement des foyers lumineux de fortes puissance",
    proposition4: "",
    goodresponse: "",
    textSolution:
      "Le bouton poussoir revient dans sa position initiale aprés une pression.",
  },

  {
    idQ: "ecl8",
    textQuestion:
      "Est-il necessaire d'adapter l'indice de protection (IP), pour un interrupteur utilisé en extérieur ?",
    proposition1: "Oui c'est obligatoire",
    proposition2: "Cela dépend de la hauteur d'implantation de l'interrupteur",
    proposition3: "",
    proposition4: "",
    goodresponse: "Oui c'est obligatoire",
    textSolution:
      "Tous les appareillages doivent avoir un indice de protection en adéquation avec le local dans lequel ils sont installés",
  },

  {
    idQ: "ecl9",
    textQuestion:
      "Quel est le courant minimal assigné à un interrupteur simple?",
    proposition1: "5A",
    proposition2: "10A",
    proposition3: "16A",
    proposition4: "",
    proposition5: "",
    goodresponse: "10A",
    textSolution:
      "L'interrupteur commandant un foyer lumineux fixe doit être au moins de 10A.",
  },

  {
    idQ: "ecl10",
    textQuestion:
      " Les boutons poussoirs s'utilisent généralement dans quel cas?",
    proposition1: "Lorsque le nombre de points de commande est supérieur à 4.",
    proposition2: "Lorsque le nombre de points de commande est supérieur à 3.",
    proposition3: "Lorsque le nombre de points de commande est supérieur à 2.",
    proposition4: "",
    proposition5: "",
    goodresponse: "Lorsque le nombre de points de commande est supérieur à 2.",
    textSolution:
      "Ce n'est pas une obligation, mais généralement lorsque le nombre de points de commande est supérieur à 2, on utilise des boutons poussoirs associés à des télérupteurs. Audela de trois c'est innévitable.",
  },
];

export { ContentQuizEclairage };
