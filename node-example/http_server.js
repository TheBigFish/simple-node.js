var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
    var posData = '';
    req.setEncoding('utf-8');
    req.on('data', function(trunk) {
        posData += trunk;
    });
    req.on('end', function() {
        res.end(posData);
    });
}).listen(8080);

console.log('服务器启动完成');
// curl -X POST --data 123 http://127.0.0.1:8080
