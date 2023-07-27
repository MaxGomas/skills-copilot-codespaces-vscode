// Create web server
// Create and run a web server
// Run the web server: node comment.js
// Load in your browser: http://localhost:3000
// Stop the server: Ctrl+C

var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    var params = url.parse(request.url, true).query;
    var input = params.number;

    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    var result = input * input;

    response.write('' + result);
    response.end();
}).listen(3000);