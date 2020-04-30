const express = require('express');
const app = new express();


app.set('view engine','pug');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('index',{name:'furkan',surname:'aydin'});
});

app.listen(3000,()=>{
    console.log("express server running..")
});