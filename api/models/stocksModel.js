//NASDAQ mongoose model
var mongoose = require('mongoose');

//create Schema
var stockSchema = new mongoose.Schema({
    //add keys here
    name: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    lastSale:{
        type: Number,
        required: true
    },
        marketCap:{
        type: Number,
    },
    sector:{
        type: String
    },
    industry:{
        type: String
    }
    
});

//create the model('modelName', schemaName, 'collection');
mongoose.model('Stocks', stockSchema, 'stocks');

//export model schema
// module.exports = stockSchema;