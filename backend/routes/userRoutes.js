const express=require('express');
const protectRoute = require('../middleware/protectRoute');
const {getUsersForSideBar}=require('../controllers/user.controller')
const router=express.Router();



router.get("/",protectRoute,getUsersForSideBar);

module.exports=router;