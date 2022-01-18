var http = require('http');
var fs = require('fs');

const { listenerCount } = require('process');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Conten-Type':'text/html'});
    var readStream = fs.ReadStream(__dirname+'/profile.html');
    readStream.pipe(response);
});
server.listen(4000,'127.0.0.1');