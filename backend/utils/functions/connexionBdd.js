//importation package mysql
const mysql = require("mysql");

//Parametre de connexion à la bdd mysql

exports.connexionToBdd = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "kvyjmgfk_admin",
    password: "Poweradmin65!",
    database: "kvyjmgfk_electravaux",
  });

  return connection;
};
