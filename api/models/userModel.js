var mongoose = require('mongoose');

//child schema
var stockSchema = new mongoose.Schema({
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

//parent schema
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, 
        required: true
    },
    name: {
        type: String, 
    },
    password: {
        type: String,
        required: true
    },
    savedStocks: [stockSchema]
});

mongoose.model('User', userSchema);