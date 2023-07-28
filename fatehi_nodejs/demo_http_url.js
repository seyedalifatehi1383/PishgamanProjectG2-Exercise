var http = require('http')

http.createServer(function (req, res) {
    // add a HTTP header:
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('hello world')
    // Return the url part of the request object:
    res.write(req.url)
    res.end()
}).listen(8080)

// http://localhost:8080/winter // /winter