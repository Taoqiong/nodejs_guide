var http = require('http');

http.get({host:'csdn.net'}, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
        console.log(data);
    });
});
