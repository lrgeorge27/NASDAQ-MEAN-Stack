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

app.use(express.static(path.join(__dirname, 'public')));
// app.use('/node-modules', express.static(__dirname + '/node_modules'));

//add middleware and enable parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//add routing 
// app.use('/api', routes); //looks in /api/routes folder with only / beginning path

//connect to mongoDB
// mongoose.connect('mongodb://lrgeorge27-firstworkspace-5563394/nasdaq');
// mongoose.connection.once('open', function(){
//     console.log("Mongoose is listening");
// });

var server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening on port " + port);
});
    


