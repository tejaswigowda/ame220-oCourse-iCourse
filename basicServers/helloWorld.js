var http = require("http");

var callback = function (req, res) { // req -> request object; res -> response object
   res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   var st = "Hello World"
   res.end(st); // send response body
}

var server = http.createServer(callback); // create an http server

server.listen(1234); // make server listen to port 1234
console.log("Server running at: "+ "http://127.0.0.1:1234");
