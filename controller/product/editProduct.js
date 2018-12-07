const appRoot = require('app-root-path');
const {product} = require(`${appRoot}/models`);

const updateProductDetails = (productId, productName, description, price, callback)=> {
    const where = {
        '_id':productId
    };
    const updateObject = {
        name: productName,
        description: description,
        price: price
    };

    product.findOneAndUpdate(where, updateObject, {upsert:true}, function(err, result){
        if(err) callback(new Error("Error while updating the product data. "+err.message), null);
        else callback(null, result);
    });
};

const editProductController = (req, res, next)=> {
    const body = req.body;

    console.log("Body : ", body);
    const productId = body.product_id;
    const productName = body.product_name;
    const description = body.description;
    const price = body.price;
    
    updateProductDetails(productId, productName, description, price, (err, response)=> {
        console.log(err, response);
        if(err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(200).json({
                message: "Product successfully updated"
            });
        }
    });
};

module.exports = editProductController;