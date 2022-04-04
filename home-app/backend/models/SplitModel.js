const mongoose = require('mongoose')

const SplitTemplate = new mongoose.Schema({
    email:{
        type:String,
        required: true,
    },
  
    title:{
        type:String,
        required: true,  
    },
    price:{
        type:Number,
        required: true,
    },

    billDate:{
        type:String,
        required: true,
    },

    members:{
        type:String,
        required: false,   // false for test
    },

    owMeCount:{
        type:String,
        required: false,  // false for test 
    },

    membersValues:{
        type:Array,
        required: false,  // false for test
    },

    date:{ // only for DB
        type:Date,
        default: Date.now
    }
})



module.exports = mongoose.model('mytableSplit',SplitTemplate )