const jwt = require('jsonwebtoken');
const User=require('../models/user.model')
const protectRoute = async(req,res,next)=>{
    try{

        const token=req.cookies.jwt;
      
        if(!token)
        {
            res.status(400).json({error:'Unauthorized'});
            return;
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            res.status(400).json({error:'Unauthorized'});
            return;
        }
        const user=await User.findById(decoded.userId).select("-password");
        if(!user)
        {
            res.status(404).json({error:'User not found'});
            return;
        }
        req.user=user;
        
        next();
        
    }catch(error)
    {
        console.log("Error in protectRoute middleware: ",error.message);
        res.status(500).json({error:'Internal server error'});
    }
}

module.exports=protectRoute;