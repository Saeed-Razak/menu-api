const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:Date,
        unique:true,
        
},

   
});

const User = mongoose.model("user", userSchema);
module.exports=User;