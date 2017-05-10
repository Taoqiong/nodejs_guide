var fs = require('fs');

var file = "./app.js";
fs.stat(file,function(err,data) {
    if(err) {
        console.log("stat error:",err);
        return ;
    }
    console.log("stat data:",data);
});
// 文件描述符？？
/*fs.fstat(file,function(err,data) {
    if(err) {
        console.log("fstat error:",err);
        return ;
    }
    console.log("fstat data:",data);
});*/
// 不解析符号链接
fs.lstat(file,function(err,data) {
    if(err) {
        console.log("lstat error:",err);
        return ;
    }
    console.log("lstat data:",data);
});
