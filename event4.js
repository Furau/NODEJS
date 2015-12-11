var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(){
	console.log("Listener 1 running");
}

var listener2 = function(){
	console.log("Listener 2 running");
}

eventEmitter.addListener("connection",listener1);

eventEmitter.on('connection',listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" listeners");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1);
console.log("listener no longer listen");

eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " listeners");
console.log('Program finished!');

