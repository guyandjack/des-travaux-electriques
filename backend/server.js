/***** creation d'un serveur node****** */
/***************************************** */

const http = require("http");
const appli = require("./appli.js");

const server = http.createServer(appli);

appli.set("port", 5022 || process.env.PORT);

server.listen(5022 || process.env.PORT);
