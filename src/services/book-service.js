const bookDao = require('../daos/book-dao');

const findAllBooks = () => bookDao.findAllBooks();

module.exports = {
    findAllBooks
};