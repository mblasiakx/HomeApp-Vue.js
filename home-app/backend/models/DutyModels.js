const mongoose = require('mongoose')

const DutyTemplate = new mongoose.Schema({
    
  
    flatId:{
        type:String,
        required: true,
    },

    TaskName:{
        type:String,
        required: true,
    },
    Member:{
        type:String,
        required: true,
    },

    StartDate:{
        type:String,
        required: true,
    },

    UntilDate:{
        type:String,
        required: true,
    },

    date:{ // only for DB
        type:Date,
        default: Date.now
    }
})



module.exports = mongoose.model('mytableDuty',DutyTemplate )