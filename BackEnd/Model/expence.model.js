const mongoose=require('mongoose')

const ExpenceSchema=new mongoose.Schema({
    title:{
        type: String,
        trim:true,
        maxLength:50
    },
    amount:{
        type: Number,
        required:true,
        maxLength:20,
        trim:true,
        minLength:1
    },
    type:{
        type: String,
        default:"Expence",
    },
    date:{
        type: Date,
        required:true,
        trim:true
    },
    catagory:{
        type: String,
        required:true,
        trim:true
    },
    description:{
        type: String,
        required:true,
        trim:true,
        maxLength:50
    }
},{timestamps:true})

module.exports=mongoose.model('Expence', ExpenceSchema)