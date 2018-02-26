/* global stocks */
// var stockData = require('../../data/nasdaq/nasdaq.json'); //temp until pulling from db
var mongoose = require('mongoose');
var Stocks = mongoose.model('Stocks');
// var ObjectId = require('mongodb');

module.exports.stocksGetAll = function(req, res){
    console.log("Getting stocks");
    console.log(req.query);
    
    var offset = 0;
    var count = 3288;
    
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    Stocks //model var
        .find() //mongo query
        .skip(offset) //offset function
        .limit(count) //count function
        .exec(function(err, stocks){  //execute function(err, returnDataCollectionName)
            if(err){
                console.log("Error finding stocks");
                res
                    .status(500)
                    .json(err);
            } else{
                console.log("Found stocks ", stocks.length);
                // console.log(res);
                res
                    .json(stocks);
            }
        }); 
    
};

module.exports.searchStock = function(req, res){
    console.log("Post search");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);
};

module.exports.stocksGetOne = function(req, res){
    //extract var = req object. object on req object. url param
    var symbol = req.params.symbol;
    console.log("Getting stock: ", symbol);
    
    Stocks
        .findOne({
            Symbol : symbol //only pulls first stock
        }, function(err, doc){
            if(err){
                console.log("Error finding stock");
                res
                    .status(500)
                    .json({"error finding stock" : err});
            } else if(!doc) {
                console.log("No stock available for id " + symbol);
                res
                    .status(400)
                    .json({"error":"No stock available for id " + symbol + "."});
            } else {
            res
                .status(200)
                .json(doc); 
        // .exec(
            }
         });
};