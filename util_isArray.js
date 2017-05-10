var util = require('util');

var obj1 = '',
    obj2 = 1,
    obj3 = [],
    obj4 = {},
    obj5 = [1,,2],
    obj6 = {name:'byvoid'};

console.log(util.isArray(obj1));
console.log(util.isArray(obj2));
console.log(util.isArray(obj3));
console.log(util.isArray(obj4));
console.log(util.isArray(obj5));
console.log(util.isArray(obj6));

/*
 * result:
 * false
 * false
 * true
 * false
 * true
 * false
*/
