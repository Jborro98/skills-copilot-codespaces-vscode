// Create web server
// Create a web server that can respond to requests for /hello and /goodbye. 
// When a client requests /hello, return the string "hello world!". When a client requests /goodbye, return the string "goodbye world!". 
// Do this with and without using ExpressJS (a web framework for NodeJS).

var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.url === '/hello') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('hello world!');
    } else if (req.url === '/goodbye') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('goodbye world!');
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
    }
});

server.listen(8080);