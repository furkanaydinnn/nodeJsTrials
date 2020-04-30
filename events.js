const events = require('events');
const eventEmitter = events.EventEmitter;
const emitter = new eventEmitter();

emitter.on("deneme",(data)=>{
   console.log(`Deneme NodeJS ${data.name} ${data.surname}`);
});

const data = {name:'furkan',surname: 'aydin'}
emitter.emit("deneme",data);