var express = require('express');
var router = express.Router();

var appRoot = require('app-root-path');
var orderProductController = require(`${appRoot}/controller/user/orderProduct`);

router.post('/order-product', orderProductController);

module.exports = router;
