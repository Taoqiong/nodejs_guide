事件驱动events
    events是Node.js最重要的模块，没有“之一”，原因是Node.js本身架构就是事件式的，而它提供了唯一的借口，所以堪称Node.js事件编程的基石。events模块不仅用于用户代码与Node.js下层事件循环的交互，还几乎被所有的模块依赖。
事件发射器
events模块只提供了一个对象：events.EventEmitter。EventEmitter的核心就是事件发射与事件监听器功能的封装。EventEmitter的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter支持若干个事件监听器。当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。
EventEmiier常用的API
EventEmitter.on(event,listener)为指定时间注册一个监听器，接受一个字符串event和一个回调函数listener。
EventEmitter.emit(event,[arg1],[arg2],[...])发射event事件，传递若干可选参数到事件监听器的参数表。
EventEmitter.once(event,listener) 为指定事件注册一个‘单次’监听器，即监听器最多只会触发一次，触发后立刻解除该监听器。

