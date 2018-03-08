var mongoose = require('mongoose');

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
    } 
});

mongoose.model('User', userSchema);