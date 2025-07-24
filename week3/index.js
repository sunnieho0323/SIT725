var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = process.env.prot || 3000;

app.listen(port, () => {
    console.log("App listening to:" + port);
})

// index.js
console.log("App started at", new Date().toLocaleTimeString());
