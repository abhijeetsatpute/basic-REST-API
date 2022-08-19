const express = require('express');
const bodyParser = require('body-parser');

const feedRoute = require('./routes/feed');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feeds', feedRoute);

app.listen(80, function() {
    console.log("Server is Running on port", this.address().port);
})