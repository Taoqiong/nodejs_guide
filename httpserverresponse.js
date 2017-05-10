var http = require('http');

http.createServer(function(req,res) {
    res.writeHead(200);
    res.write("<h1>lalala</h1>");
    res.write("<h2>glad to see you~</h2>");

    res.write("<a href='http://lib.csdn.net' target='_blank'>May I Help You?</a>");
    res.end();
}).listen(1212);
