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

## TODO
Use `express-validator` to facilitate input sanitization and validation

Implement server.js as a class instead of script
