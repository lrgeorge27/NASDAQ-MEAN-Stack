var express = require('express');
var router = express.Router();

router
    .route('/stocks');
    // .get()
    // .post();

router
    .route('/stocks/:stockId');