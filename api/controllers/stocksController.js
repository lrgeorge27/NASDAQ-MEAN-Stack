var stockData = require('../../data/nasdaq/nasdaq.json'); //temp until pulling from db

module.exports.stocksGetAll = function(req, res){
    console.log("Getting stocks");
        res
            .status(200)
            .json(stockData);
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