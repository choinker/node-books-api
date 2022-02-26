const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    pubDate: Date,
    type: {
        type: String,
        enum: ['HARD_COVER', 'SOFT_COVER', 'E_BOOK']
    }
}, {collection: 'books'});

module.exports = bookSchema;