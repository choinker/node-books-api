const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize dotenv for secret mgmt
require('dotenv').config();

// Define app
const app = express();

// What is the purpose of bodyparser?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define access control, allow all traffic
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

app.use(cors({
    credentials: true,
    origin: true
}));

// Pick up react index.html file
app.use(
    express.static(path.join(__dirname, './frontend/build'))
);

app.options('*', cors());

// Mongo DB adapter
const mongoUser = process.env.mongoUser;
const mongoPass = process.env.mongoPass;

console.log('andrew user: ', mongoUser, ' pass: ', mongoPass);

const connectionString = `mongodb+srv://${mongoUser}:${mongoPass}@andrewcluster0.zx950.mongodb.net/categories?retryWrites=true&w=majority`;
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});

// Mongoose debugging, prints queries to console
mongoose.set('debug', true);
/*
mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
*/

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("database connected");
});

require('./controllers/book-controller')(app);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server is running on ', port);
});