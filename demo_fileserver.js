var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
	fs.readFile('app.js',function(err, data){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8080);