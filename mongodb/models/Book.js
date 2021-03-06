const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    comments: [],
    meta: {
        votes : Number,
        favs : Number
    },
    published: {
        type: Boolean,
        default: false
    },
    publishedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('book',BookSchema);