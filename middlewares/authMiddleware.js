const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const user=require("../models/userSchema");

exports.protect=async function(req, res, next){
    let token;
    if (req.headers.authorization) {
        try{
        token= req.headers.authorization;
        const decorded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decorded.id);
        next();
        }catch(err) {
            res.status(401).json({
                message:"invalid authorization"
            })
        
    } 
    if(!token){
        res.status(401).json({
            message:"You are not authorized"
        });
    }
        
    }
}
