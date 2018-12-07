const appRoot = require('app-root-path');
const {product} = require(`${appRoot}/models`);

const deleteProductDetails = (productId, callback)=> {
    product.findByIdAndRemove(productId, function(err, result){
        if(err) callback(new Error("Error while updating the product data. "+err.message), null);
        else callback(null, result);
    });
};

const deleteProductController = (req, res, next)=> {
    const body = req.body;

    console.log("Body : ", body);
    const productId = body.product_id;
    
    deleteProductDetails(productId, (err, response)=> {
        if(err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(200).json({
                message: "Product successfully deleted"
            });
        }
    });
};

module.exports = deleteProductController;