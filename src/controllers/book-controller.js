const bookService = require('../services/book-service');

module.exports = (app) => {
    // Return all books
    app.get('/api/v1/books', (req, res) => {
        console.log('andrew ping books endpoint');
        const books = bookService.findAllBooks();
        res.send(books);
    });

    app.get('/api/v1/books/:bid', (req, res) => {
        res.send('return book by id');
    });

    app.get('/api/v1/books/:aname', (req, res) => {
        res.send('return book by id');
    });

    app.get('/', (req, res) => {
        res.send('Hello world!');
     });
};

