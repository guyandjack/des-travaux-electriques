/***** creation d'un derveur node****** */
/***************************************** */

const http = require("http");
const appli = require("./app/appli.js");
const server = http.createServer(appli);
server.listen();
