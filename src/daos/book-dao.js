const bookModel = require('../models/book-model');

// const findAllBooks = () => bookModel.find();

// BELOW returns undefined
const findAllBooks = () => {
    const books = bookModel.find();
    // books is a mongoose query at this point, uncomment below for details
    // console.log('andrew book-dao books: ', books);
    return books;
};

module.exports = {
    findAllBooks
};