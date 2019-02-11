const EventEmitter = require('events');

const MyEvent = new EventEmitter();

MyEvent.addListener('visit', () =>{
    console.log('thanks for your visiting');
});
MyEvent.on('exit', () =>{
    console.log('goodbye');
});
MyEvent.once('특별이벤트', ()=> {
    console.log('implements once');
});
MyEvent.emit('visit');
MyEvent.emit('exit');
MyEvent.emit('특별이벤트');