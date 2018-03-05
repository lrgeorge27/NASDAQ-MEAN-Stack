var mongoose = require('mongoose');

var historySchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        required: true
    }
});

mongoose.model('History', historySchema);
module.exports = historySchema;
