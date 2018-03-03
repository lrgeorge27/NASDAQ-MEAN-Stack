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

// module.exports.searchStock = function(req, res){
//     console.log("Post search");
//     console.log(req.body);
//     res
//         .status(200)
//         .json(req.body);
// };

module.exports.stocksGetSymbol = function(req, res){
    //extract var = req object. object on req object. url param
    var symbol = req.params.symbol;
        symbol = symbol.toUpperCase();
    console.log("Getting stock: ", symbol);
    
    Stocks
        .findOne({
            Symbol : symbol 
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

module.exports.stockById = function(req, res){
    //extract a parameter and put it into a var
    var id = req.params.id;
    console.log("GET stockId", id);
    
    Stocks
        .findOne({
            _id : id 
        }, function(err, doc){
            var response = {
                status: 200,
                message: doc
            };
            if(!doc) {
                response.status = 404;
                response.message = {
                    "message": "Stock not found"
            };
            }
            else if(err){
                console.log("Error finding stock");
                response.status = 500;
                response.message = err;
            } 
            res
                .status(response.status)
                .json(response.message); 
         });
};

// var _addReview = function(req, res, hotel){
  
//   hotel.reviews.push({
//       name: req.body.name, 
//       rating: parseInt(req.body.rating, 10),
//       review: req.body.review
//   });
  
//   hotel.save(function(err, hotelUpdated){
//       if (err){
//           res
//             .status(500)
//             .json(err);
//       } else {
//           res
//             .status(201)
//             .json(hotelUpdated.reviews[hotelUpdated.reviews.length -1]);
//       }
//   });
    
// };


// module.exports.addHistory = function(req, res){
//     var symbol = req.params.symbol;
//     console.log("Getting stock: ", symbol);
    
//     Stocks
//         .findOne({
//             Symbol : symbol 
//         }, function(err, doc){
//             var response = {
//                 status: 200,
//                 message: []
//             };
//             if(err){
//                 console.log("Error finding stock");
//                 response.status = 500;
//                 response.message = err;
//             }
//             else if(!doc) {
//                 console.log("Stock not found", symbol);
//                 response.status = 404;
//                 response.message = {"message": "Stock" + symbol + "not found "};
//             }
//             if (doc){
//                 _addReview(req, res, doc);
//             } else {
//                 console.log("Returned doc", doc);
//                 res
//                     .status(200)
//                     .json(doc);  
//             }
//          });
// };
