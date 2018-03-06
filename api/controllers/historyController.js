var mongoose = require('mongoose'); 
var History = mongoose.model('History');
// var History = require('../models/historyModel.js');

//GET search history for all stocks
module.exports.searchGetAll = function(req, res){
    console.log(req.query);
    
    History
        .find()
        .exec(function(err, doc){
            if(!doc) {
                console.log("No search history available");
                res
                    .status(404)
                    .json({"message": "No search history available."});
                return;
            }
            else if(err){
                console.log("Error finding search history");
                res
                    .status(500)
                    .json(err);
            }

            console.log("Returned doc", doc);
            res
                .status(200)
                .json(doc);  
         });
};



module.exports.addSearch = function(req, res){
    var symbol = req.body.symbol;
    var createdOn = new Date();

    console.log(req.query);
    
    History.create({
        symbol : symbol,
        createdOn : createdOn
    }, function(err, doc){
            if(err){
                console.log("Error saving stock");
                res.status(500).json(err);
            }
            else {
                console.log("Returned doc", doc);
                res
                    .status(200)
                    .json(doc);  
            }
         });
};




