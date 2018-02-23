var express = require('express');
var router = express.Router();

var stocksCtrl = require('../controllers/stocksController.js');
// var userCtrl = require('../controllers/userController.js');

router
    .route('/stocks')
    //Ctrl mapping: .http method(var.functionName);
    .get(stocksCtrl.stocksGetAll);
    // .post();

router
    .route('/stocks/:stockId')
    .get(stocksCtrl.stocksGetOne);
    
// router
//     .route('/user/register')
//     .post(userCtrl.register);
    
//     router
//         .route('/user/login')
//         .post(userCtrl.login);

    
    
module.exports = router;