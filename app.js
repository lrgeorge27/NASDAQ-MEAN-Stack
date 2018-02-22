//NASDAQ APP - Main node file
// require('./api/dbconnection.js').open();
require('./api/db.js'); //starts connection with mongoose, use either dbconnections.js or mongoose, not both
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var routes = require('/api/routes');
var path = require('path');

var app = express();

app.set('port', process.env.PORT);

//app.httpMethod('path to listen for', function(to call once connected){});

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/node-modules', express.static(__dirname + '/node_modules'));

app.get('/json', function(req, res){
    console.log("Get json");
    res
        .status(200)
        .json({"jsonData": true});
});

app.get('/file', function(req, res){
    console.log("Get file");
    res
        .status(200)
        .sendFile(path.join(__dirname, "package.json"));
});


//add middleware and enable parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening on port " + port);
});
    


