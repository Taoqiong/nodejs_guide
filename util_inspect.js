var util = require('util');

function Person() {
    this.name = 'byvoid';

    this.toString = function() {
        return this.name;
    };
}

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

/*
 * result: 
 * { name: 'byvoid', toString: [Function] }
 * { toString:
 *   { [Function]
 *     [prototype]: { [constructor]: [Circular] },
 *     [caller]: null,
 *     [length]: 0,
 *     [name]: ''.
 *     [arguments]: null },
 *   name: 'byvoid'
 * }
 */
