//Formate une date issu de la bdd mysql
//"dateSql" est une date au format sql issu de la bdd mysql

export function formatDate(dateSql) {
  //separe les differentes parties de la date dans un tableau
  let dateSplit = dateSql.split(/[T.:]/);

  //garde les 4 premiers elements de date dans le tableau
  let dateFormated = dateSplit.splice(0, 3);

  //insertion des carracteres de lisibilite
  dateFormated.splice(0, 0, "Le ");
  dateFormated.splice(2, 0, " à ");
  dateFormated.splice(4, 0, ":");
  dateFormated.splice(6, 0, " GMT");

  //formatage de la partie 'annee' de la date
  let year = dateFormated[1].split("-").reverse().join("/");

  //Implement de la nouvelle partie 'annee' dans la date
  dateFormated.splice(1, 1, year);

  return dateFormated;
}
