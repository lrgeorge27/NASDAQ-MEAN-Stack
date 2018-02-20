var MongoClient = require('mongodb').MongoClient; //reguire native driver class to manage connections
var dburl = 'mongodb://lrgeorge27-firstworkspace-5563394/nasdaq'; //connection string 'protocal://server:port/dbname'

var _connection = null; //var to hold connection

//method to open the connection, required in app.js
var open = function(){ 
    //set connection
    MongoClient.connect(dburl, function(err, db){ //connection string, and callback function
        if (err) {
            console.log("DB connection failed");
            return;
        }
        _connection = db;
        console.log("DB connection open", db);
    });
};

var get = function(){ //get connection
    return _connection;
};

module.exports = { //expose methods
    open : open,
    get : get
};