const http = require('http');


const server = http.createServer((request,response)=>{
    console.log("getting a new request");
    response.writeHead(200,{'content-type':'text/html; charset=utf8'});
    response.write("<h2>hello world furkan</h2>");
    response.end();
});

server.listen(8080);