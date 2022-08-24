const http = require('http');

http.createServer(function(request, response) {
    console.log('request recieved ');
    response.end('hello word', 'utf-8')
}).listen(3000)

console.log('server started on port 3000')