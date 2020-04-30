const express = require('express');
const router = express.Router();

// Models
const Book = require('../models/Book');

router.post('/new', function(req, res, next) {
    const book = new Book({
        title: 'PHP',
        comments: [
            {message:'Good Practices'},
            {message: 'that is perfect'}
            ],
        meta: {
            votes: 16,
            favs: 199
        },
        published: true

    });
    book.save((err,data)=>{
        if(err)
            console.log(err);

        res.json(data);
    });
});

router.get('/search',(req,res)=>{
    Book.find({'meta.favs':250},'title comments',(err,data)=>{
        res.json(data);
    });
});

router.get('/searchOne',(req,res)=>{
    Book.findOne({title: 'Node.JS Trials'},'comments',(err,data)=>{
        res.json(data);
    });
});

router.get('/searchById',(req,res)=>{
    Book.findById('5e0a27acf6aa5c4f94736fe8',(err,data)=>{
        res.json(data);
    });
});

router.put('/update',(req,res)=>{
    Book.update({published: false},{published:true, title:'deneme'},{upsert: true},(err,data)=>{
        res.json(data);
    });
});

router.put('/updateById',(req,res)=>{
    Book.findByIdAndUpdate('5e0a27acf6aa5c4f94736fe8',{title:'Hello World', 'meta.votes':35},(err,data)=>{
        res.json(data);
    });
});

router.delete('/remove',(req,res)=>{
    Book.findById('5e0a27acf6aa5c4f94736fe8',(err,book)=>{
        book.remove((err,data)=>{
            res.json(data);
        });
    });
});

router.get('/sort',(req,res)=>{
    Book.find({},(err,data)=>{
        res.json(data);
    }).sort({'meta.favs':1});
});

router.get('/sort',(req,res)=>{
    Book.find({},(err,data)=>{
        res.json(data);
    })
        .sort({'meta.favs':1})
        .limit(1);
});


module.exports = router;
