const express = require('express');
const bodyParser = require('body-parser');

const feedRoute = require('./routes/feed');

const app = express();

app.use(bodyParser.json());


app.use('/feeds', feedRoute);

app.listen(80, function() {
    console.log("Server is Running on port", this.address().port);
})