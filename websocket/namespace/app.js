const httpServer = require('http');
const socketio = require('socket.io');
const server = httpServer.createServer((req,res)=>{
    console.log('hey!');
});

server.listen(3000);

const io = socketio.listen(server);
const nsp = io.of('/myNameSpace');

nsp.on('connection',(socket)=>{
    console.log('User Connected');

    socket.on('naming',()=>{
       nsp.emit('sendEveryBody',{name:'Furkan'});
    });
});
