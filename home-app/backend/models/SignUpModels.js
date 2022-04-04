const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({

    flatId:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required: true,
    },
    confirmPassword:{
        type:String,
        required: true,
    },

    date:{ // only for DB
        type:Date,
        default: Date.now
    }
})



module.exports = mongoose.model('mytable',signUpTemplate )