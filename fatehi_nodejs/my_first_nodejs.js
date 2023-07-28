var http = require('http') // including an HTTP module

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello, world');
}).listen(8080);