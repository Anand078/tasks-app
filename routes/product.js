var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
var addProductController = require(`${appRoot}/controller/product/addProduct`);
var editProductController = require(`${appRoot}/controller/product/editProduct`);
var deleteProductController = require(`${appRoot}/controller/product/deleteProduct`);
var getProductReportController = require(`${appRoot}/controller/product/getProductReport`);

router.post('/add', addProductController);
router.post('/edit', editProductController);
router.delete('/delete', deleteProductController);
// router.get('/get-report', getProductReportController);

module.exports = router;