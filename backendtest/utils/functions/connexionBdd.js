//importation package mysql
const mysql = require("mysql");

//Parametre de connexion à la bdd mysql

exports.connexionToBdd = () => {
  
  let paramBddTest = {
    host: "localhost",
    user: "kvyjmgfk_admin",
    password: "Poweradmin65!",
    database: "kvyjmgfk_test",
  };

  
  const connection = mysql.createConnection(paramBddTest);

  return connection;
};
