//Contenu du quiz sur "les circuits specilisés"

let ContentQuizCircuitSpecialise = [
  {
    idQ: "circuitspecialise1",
    textQuestion:
      "Peut-on câbler un circuit spécilisé avec une section de 1.5mm² ?",
    proposition1: "oui",
    proposition2: "non",
    goodresponse: "non",
    textSolution:
      "Non, en effet la NFC-1500 autorise uniquement une section de 2.5mm²",
  },

  {
    idQ: "circuitspecialise2",
    textQuestion:
      "Est-ce que les prises du plan de travail d'une cuisine sont câblées sur un circuit spécialisé ?",
    proposition1: "non",
    proposition2: "oui",

    goodresponse: "oui",
    textSolution:
      "Oui , les prises du plan de travail doivent être sur un circuit spécialisé.",
  },

  {
    idQ: "circuitspecialise3",
    textQuestion:
      "Peut-on brancher un lave-linge sur un circuit de prise non spécialisé ?",
    proposition1: "oui",
    proposition2: "non",
    goodresponse: "non",
    textSolution:
      "Non, en effet la NFC-1500 stipule d' utiiser un circuit spécilisé. ",
  },

  {
    idQ: "circuitspecialise4",
    textQuestion:
      "Peut-on utiliser le circuit spécialisé du lave-linge, pour une prise 16A alimentant un appareil de faible puissance. ?",
    proposition1: "oui",
    proposition2: "non c' est strictement interdit",
    proposition3:
      "oui si il y a un disjoncteur de 20A, qui assure la protection du circuit.",
    goodresponse: "non c' est strictement interdit",
    textSolution: "Non , c' est strictement interdit dans tous les cas",
  },

  {
    idQ: "circuitspecialise5",
    textQuestion:
      "Quel est le nombre maximal de points d' utilisation pour un circuit spécialisé ?",
    proposition1: "2",
    proposition2: "1",
    proposition3: "Cela dépend du dispostif différentiel de protection.",
    proposition4: "3 maximum",
    goodresponse: "1",
    textSolution:
      "Toujours d'après la NFC-1500 ,uniquement 1 seul point d' utilisation.",
  },

  {
    idQ: "circuitspecialise6",
    textQuestion:
      "Un circuit dédié, peut-il alimenter plusieurs appareillages de même type , comme le circuit chauffage par exemple ?",
    proposition1: "oui sous certaines conditions",
    proposition2: "non la norme l'interdit",
    goodresponse: "oui sous certaines conditions",
    textSolution:
      "Oui, à condition que la section des conducteurs et le dispositif de protection, soient en adéquation avec la puissances des appareillages.",
  },

  {
    idQ: "circuitspecialise7",
    textQuestion:
      "Est-ce que je peux brancher le cumulus principal et un cumulus d'appoint de très faible puissance sur le même circuit ?",
    proposition1: "oui si la puissance cumulée des appareils le permet",
    proposition2: "non",
    proposition3: "oui car les appareils sont de même type.",
    goodresponse: "non",
    textSolution:
      "Non , le cumulus principal doit être sur un circuit sécialisé. Ainsi que le cumulus d' appoint.",
  },

  {
    idQ: "circuitspecialise8",
    textQuestion:
      "Peut-on protéger un circuit spécialisé avec un disjoncteur magnétothermique de 16A ?",
    proposition1: "non uniquement avec un disjoncteur de 20A",
    proposition2: "oui c' est possible",
    goodresponse: "oui c' est possible",
    textSolution:
      "Oui, c' est possible, tout en s' assurant que l' appareil fonctinne normalement avec un courant max de 16A",
  },

  {
    idQ: "circuitspecialise9",
    textQuestion:
      "Un dispositif differentiel de type AC est il suffisant pour le circuit spécilisé du four ?",
    proposition1: "oui",
    proposition2: "non, il faut un type A minimum",
    proposition3: "oui si la puissance du four est inférieur à 2500W",
    goodresponse: "oui",
    textSolution:
      "Oui le type AC est suffisant, le type du différentiel ne dépend pas de la puissance de l' appareil utilisé.",
  },

  {
    idQ: "circuitspecialise10",
    textQuestion:
      "Que permet un abonnement double tarifs de votre fournisseur d' électricité?",
    proposition1:
      "De bénificier d'un tarif réduit lors de l'utilisation des appareils de forte consommation.",
    proposition2:
      "De béneficier d' un tarif réduit pendant les heures creuses.",
    proposition3: "De bénéficier d' tarif réduit pendant les heures pleines. ",
    goodresponse:
      "De béneficier d' un tarif réduit pendant les heures creuses.",
    textSolution:
      "Une reduction du prix du KWh est appliqué pendant les heures creuses.",
  },
];

export { ContentQuizCircuitSpecialise };
