// singleobject.js

function Hello(){
    var name;
    
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function(){
        console.log('Hello ' + name);
    };
};

// 通常会使用exports.*输出，在其他文件中需要通过require('./singleobject').Hello来获取Hello对象，略显冗余
//exports.Hello = hello;

// 使用module.exports = HEllo 代替了exports.Hello = Hello;
// 在外部引用本模块时，其借口对象就是要输出的Hello对象本身，
// 而不是原先的exports
module.exports = Hello;

//gethello.js

var Hello = require('./singleobject');

hello = new Hello();
Hello.setName('BYVoid');
hello.sayHello();

