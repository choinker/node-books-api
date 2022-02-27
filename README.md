# node-books-api

## Architecture
server => controller => service => DAO => Model & Schema

server.js
1. Manage access for incoming calls (CORS)
2. Guide traffic to controller.js
3. Connect to Mongo DB


## Packages used
express
mongoose
cors
dotenv

## Endpoints
`http://localhost:3000/api/v1/books` - returns all books in the collection
`https://node-categories-api.herokuapp.com/` - heroku app

## Debugging Heroku
heroku logs --tail

## TODO
Create react app front end client, using Charka UI design system

Use `express-validator` to facilitate input sanitization and validation

Implement server.js as a class instead of script

Use PostgreSQL as backend data store

Expose express endpoints as graphql endpoints

ETL exercise taking https://openlibrary.org/dev/docs/api/books and loading the books collection with that dat
