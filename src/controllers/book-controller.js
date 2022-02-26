const bookService = require('../services/book-service');

module.exports = (app) => {
    // Return all books
    app.get('/api/v1/books', async (req, res) => {
        console.log('andrew ping books endpoint');
        
        // bookService.findAllBooks()
        //     .then(allBooks => res.json(allBooks))});
        // TODO: implement async await below
        try {
            const books = await bookService.findAllBooks();
            console.log('andrew books resp: ', books);
            res.json(books);
        } catch(err) {
            // TODO: better error handling on res, return a status
            console.log('error calling books: ', err);
        }
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

