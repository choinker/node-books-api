
export const getAllBooks = async () => {
    try {
        const booksResp = await fetch('/api/v1/books', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!booksResp.ok) {
            throw new Error('HTTP status ', booksResp.status);
        }

        return booksResp.json();
    } catch (err) {
        console.log('ERROR calling getAllBooks /api/v1/books: ', err);
    }
};