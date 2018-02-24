var stockData = require('../../data/nasdaq/nasdaq.json'); //temp until pulling from db

module.exports.stocksGetAll = function(req, res){
    console.log("Getting stocks");
    console.log(req.query);
    
    var offset = 0;
    var count = 35;
    
    if(req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }
    
    if(req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }
    
    var returnData = stockData.slice(offset, offset+count);
        res
            .status(200)
            .json(returnData);
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
    var stockId = req.params.stockId;
    //use url param as location id on json array - temporary until connected to db
    var thisStock = stockData[stockId];
    console.log("Getting stock: ", stockId);
        res
            .status(200)
            .json(thisStock); //need to change once var is defined for data
};