var express = require('express');
var router = express.Router();

var stocksCtrl = require('../controllers/stocksController.js');
var historyCtrl = require('../controllers/historyController.js');
var userCtrl = require('../controllers/userController.js');

router
    .route('/stocks')
    //Ctrl mapping: .http method(var.functionName);
    .get(stocksCtrl.stocksGetAll);

router
    .route('/stock/:id')
    .get(stocksCtrl.stockById);

//search
router
    .route('/search/')
    .get(historyCtrl.searchGetAll)
    .post(historyCtrl.addSearch);

router
    .route('/search/:symbol')
    .get(stocksCtrl.stocksGetSymbol);




//authentication
    
router
    .route('/user/register')
    .post(userCtrl.register);
    
router
    .route('/user/login')
    .post(userCtrl.login);
    
router
    .route('/user')
    .post(userCtrl.saveToUser);


    
    
module.exports = router;

// userCtrl.authentication,