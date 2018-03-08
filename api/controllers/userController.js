var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

module.exports.register = function(req, res){
    console.log("registering user");
   // console.log(req.body);
    
    var username = req.body.username;
    var name = req.body.name || null; //null, because name is not required
    var password = req.body.password;
    
    User.create({
        username : username,
        name : name,
        password : bcrypt.hashSync(password, bcrypt.genSaltSync(10)) //encrypt password
    }, function(err, user){
        if (err){
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log("user created", user);
            res.status(201).json(user);
        }
    });
};

module.exports.login = function(req, res){
    console.log("logging in user");
    
    var username = req.body.username;
    var password = req.body.password;
    
    User.findOne({
        username: username //only need username because it is unique
    }).exec(function(err, user){
        if(err){
            console.log(err);
            res.status(400).json(err);
        } else {
            if(bcrypt.compareSync(password, user.password)){ //compare password submitted to password in user object using bcrypt
                var token = jwt.sign({username: user.username}, 's3cr3t', {expiresIn: 3600}); //assign web token with params(payload {username from db object}, secret, {expires in 1 hour})
                console.log("user found", user);
                res.status(200).json({success: true, token: token});
            } else {
                res.status(401).json("Unauthorized");
            }
        }
    });
};

//authenticate, use userCtrl.authentication in index routes to require authentication
module.exports.authentication = function(req, res, next){
    //tokens need to be sent as part of authorization header
    var headerExists = req.headers.authorization;
    if(headerExists){
        var token = req.headers.authorization.split(' ')[1]; // Auth bearer xxx
        jwt.verify(token, 's3cr3t', function(error, decoded){
            if (error){
                console.log(error);
                res.status(401).json("Unauthorized");
            } else{
                req.user = decoded.username;
                next();
            }
        });
    } else {
        res.status(403).json('No token provided');
    }
};

module.exports.saveToUser = function(req, res){
    console.log("save to user:");
    console.log("body");
    console.log(req.body);
    console.log("data");
    console.log(req.data);
    var name = req.body.name;
    var symbol = req.body.symbol;
    var lastSale = req.body.lastSale;
    var marketCap = req.body.marketCap;
    var sector = req.body.sector;
    var industry = req.body.industry;

    console.log(req.query);
    
    User.create({
        name: name,
        symbol: symbol,
        lastSale: lastSale,
        marketCap: marketCap,
        sector: sector,
        industry: industry
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
