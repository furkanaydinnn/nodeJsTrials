const express = require('express');
const app = new express();

app.get('/con*tact',(req,res)=>{
    res.send('hello nodeJs');
});

app.post('/contact',(req,res)=>{
   res.send('hello from post method');
});

app.get('/user/:id/:postId?',(req,res)=>{
    console.log(req.params);
    res.end();
   // res.send(req.params);
});


/*app.all('/contact',(req,res)=>{
   res.send('hell form all method');
});*/

app.listen(3000,()=>{
    console.log('express server running..');
});