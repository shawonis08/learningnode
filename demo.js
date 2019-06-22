var http = require('http')

http.createServer(function(req, res){
	res.write("helo")
	res.end()
}).listen(8080)