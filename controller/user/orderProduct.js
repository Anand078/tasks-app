const appRoot = require('app-root-path');
const {order} = require(`${appRoot}/models`);

const storeOrderDetails = (productId, purchaserName, price, callback)=> {
    const orderData = new order({
        product_id: productId,
        purchaser_name: purchaserName,
        price: price
    });
    orderData.save((err, result)=> {
        if(err) callback(new Error("Error while saving the order data. "+err.message), null);
        else callback(null, result);
    });
};

const orderProductController = (req, res, next)=> {
    const body = req.body;

    const productId = body.product_id;
    const purchaserName = body.purchaser_name;
    const price = body.price;
    
    storeOrderDetails(productId, purchaserName, price, (err, response)=> {
        if(err) {
            res.status(500).json({
                message: err.message
            });
        }
        else {
            res.status(200).json({
                message: "order successfully placed"
            });
        }
    });
};

module.exports = orderProductController;