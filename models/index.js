var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
mongoose.set('useCreateIndex', true);
var connection = mongoose.connect("mongodb://localhost:27017/TasksDB", { useNewUrlParser: true });

var productDetails = new Schema({
    name: String,
    description: String,
    price: Number
}, {
    timestamps: true
});

const product = mongoose.model('product', productDetails);

var orderDetails = new Schema({
    product_id: {type:String, ref: 'product'},
    purchaser_name: String,
    price: Number
}, {
    timestamps: true
});
const order = mongoose.model('order', orderDetails);
module.exports ={
    product,
    order
};