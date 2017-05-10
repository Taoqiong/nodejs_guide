var util = require('util');

function Base(){
    this.name = 'base';
    this.base = 1991;

    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name);
};

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

/*
 * 运行结果：
 * base 
 * Hello base 
 * { name: 'base'. base: 1991, sayHello: [function] }
 * sub 
 * { name: 'sub' }
 * /

/*
 * util.inherits实现继承。
 * 仅继承原型中定义的函数，不会继承构造函数内部创造的属性、函数。
 * 原型中定义的属性不会被console.log作为对象的属性输出
 */
