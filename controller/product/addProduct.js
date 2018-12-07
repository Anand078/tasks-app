const appRoot = require('app-root-path');
const {product} = require(`${appRoot}/models`);

const storeProductDetails = (productName, description, price, callback)=> {
    console.log("Inside storeProductDetails");
    console.log(product);
    const productData = new product({
        name: productName,
        description: description,
        price: price
    });
    console.log("Before saving", productData);
    productData.save((err, result)=> {
        console.log("After saving");
        if(err) callback(new Error("Error while saving the product data. "+err.message), null);
        else callback(null, result);
    });
};

const addProductController = (req, res, next)=> {
    const body = req.body;

    console.log("Body : ", body);
    const productName = body.product_name;
    const description = body.description;
    const price = body.price;
    
    storeProductDetails(productName, description, price, (err, response)=> {
        console.log(err, response);
        if(err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(200).json({
                message: "Product successfully added"
            });
        }
    });
};

module.exports = addProductController;