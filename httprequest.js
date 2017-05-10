var http = require('http');
var querystring = require('querystring');

var contents = querystring.stringify({
    name:'tao_qiong',
    email:'taoqiong@csdn.net'
});

var options = {
    host: 'lib.csdn.net',
    path: '/',
    method: 'GET',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length' : contents.length
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (data) {
        console.log(data);
    });
});

req.write(contents);
req.end();
