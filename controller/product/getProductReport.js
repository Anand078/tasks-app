const appRoot = require('app-root-path');
const {product, order} = require(`${appRoot}/models`);

const getProductReport = (callback)=> {
    order.find( function(err, result){
        if(err) callback(new Error("Error while updating the product data. "+err.message), null);
        else callback(null, result);
    });
};

const getProductReportController = (req, res, next)=> {
    const body = req.query;
    
    getProductReport((err, response)=> {
        if(err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(200).json({
                message: "",
                data: response
            });
        }
    });
};

module.exports = getProductReportController;