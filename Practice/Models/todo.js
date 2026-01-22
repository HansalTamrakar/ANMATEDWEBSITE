const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:50
    },
    percentage:{
        type:Number,
        required:true,
        maxlength:50,
        min:0,
        max:100
    },
    hobby:{
        type:String,
        required:true,
        maxlength:50
    },
   
})

module.exports =mongoose.model("Todo",todoSchema)