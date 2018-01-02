var fs = require('fs');
var http = require('http');

var server = http.createServer();


server.on('request', function(request, response) {
    if (request.method === 'GET' && request.url === '/') {
        response.setHeader('Content-Type', 'text-html; charset=utf-8');
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    } else {
        response.setHeader('Content-Type', 'image/jpeg');
        response.statusCode = 404;
        fs.readFile('./404.jpeg', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});

server.listen(9000);