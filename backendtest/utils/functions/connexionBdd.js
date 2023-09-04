//importation package mysql
const mysql = require("mysql");

//Parametre de connexion à la bdd mysql

exports.connexionToBddTest = () => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "kvyjmgfk_admin",
    password: "Poweradmin65!",
    database: "kvyjmgfk_test",
  });

  return connection;
};
