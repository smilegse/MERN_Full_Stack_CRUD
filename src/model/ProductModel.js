const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    title: {type:String, require: true},
    price: {type: Number, required: true},
    discount: {type: String, required: true},
    discount_price: {type: Number, required: true}

}, {timestamps:true, versionKey: false})

const ProductModel = mongoose.model('products', DataSchema)
module.exports = ProductModel;

