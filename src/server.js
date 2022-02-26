const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

app.options('*', cors());

// Mongo DB adapter
// TODO: use .env user and password
const connectionString = 'mongodb+srv://<username>:<password>@andrewcluster0.zx950.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect('mongodb+srv://<username>:<password>@andrewcluster0.zx950.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')