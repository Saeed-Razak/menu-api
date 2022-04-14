const mongoose = require("mongoose")

const foodSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true

    },
    time:{
        type:Date,
        default: Date.now()
    },
    ingredients:{
        type:Array,
        required:true
    },
    recipe:{
        type:Array,
        required:true
    }
},
{
    timestamps:true
})

const Food = mongoose.model("Food", foodSchema);
module.exports=Food;