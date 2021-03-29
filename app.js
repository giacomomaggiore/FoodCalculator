const express = require('express');
const path = require('path');
const app = express();

const port = 5003


app.get('/', function(req, res,) {
    res.sendFile(__dirname + '/index.html')
});

app.listen(port)

