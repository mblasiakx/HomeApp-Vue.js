const mongoose = require('mongoose')

const ProductsTemplate = new mongoose.Schema({

    flatId:{
        type:String,
        required: true,
    },
    productName:{
        type:String,
        required: true,
    },
    date:{ // only for DB
        type:Date,
        default: Date.now
    }
})



module.exports = mongoose.model('mytableProducts',ProductsTemplate )