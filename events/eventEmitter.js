var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2) {
    console.log('listener1',arg1,arg2);
});

emitter.on('someEvent', function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});

emitter.emit('someEvent','byvoid', 1991);

/*
 * 对于每个事件，EventEmitter支持若干个事件监听器。
 * 当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
 */
/*
result:
listener1 byvoid 1991
listener2 byvoid 1991
 */
