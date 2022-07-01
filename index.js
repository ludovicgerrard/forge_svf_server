var express = require('express');
var cors = require('cors');
var app = express();

//setting middleware
app.use(cors());

app.use(express.static('models'));
app.use('/', express.static(__dirname + '/')); //Serves resources from public folder


var server = app.listen(3000);