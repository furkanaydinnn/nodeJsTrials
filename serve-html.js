const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err)
            throw err;

        response.writeHead(200,{'content-type':'text/html; charset=utf8'});
        response.end(data);
    });

});

server.listen(8080);