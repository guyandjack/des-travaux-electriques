/***** creation d'un serveur "test" node****** */
/***************************************** */

/*var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var message = 'It works but some troubles!!!!!\n',
        version = 'NodeJS ' + process.versions.node + '\n',
        response = [message, version].join('\n');
    res.end(response);
});
server.listen();*/

const http = require("http");
const appli = require("./app.js");

/*const server = http.createServer((req, res)=>{
    res.end("mon serveur refonctionne");
});*/

const server = http.createServer(appli);

appli.set("port", 4000 || process.env.PORT);

server.listen(4000 || process.env.PORT);
