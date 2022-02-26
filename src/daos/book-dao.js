const bookModel = require('../models/book-model');

const findAllBooks = () => bookModel.find();

module.exports = {
    findAllBooks
};