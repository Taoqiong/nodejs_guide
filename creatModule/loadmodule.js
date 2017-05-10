//loadmodule.js

var hello1 = require('./module');
hello1.setName('BYVoid');

// 指向同一实例，覆盖前者
var hello2 = require('./module');
hello2.setName('BYVoid 2');

hello1.sayHello();// 输出结果: Hello BYVoid 2
