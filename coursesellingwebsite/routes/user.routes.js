const express = require("express")
const  userRouter = express.Router();
const bcrypt = require("bcrypt")
const jwt  =  require("jsonwebtoken");
const User = require("../models/users.models.js");
const JWT_USER_KEY = "abasajsnccsa"
const {userMiddelware} = require("../middlewares/user.middlewares.js")
const Purchase = require("../models/purchase.models.js")

userRouter.post("/signup" ,async (req,res) =>{
      const { email , password , firstName , lastName } = req.body;
        
      const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
          
      let createdUser = await User.create({
          email,
          password : hashedPassword,
          firstName,
          lastName
      })
       
       res.send( "Sigup Successfully");
    


})

userRouter.post("/signin", async (req,res) =>{
 const { email , password } = req.body;
 
 const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.json("Invalid email or password");
        }

        const loggedIn = await bcrypt.compare(password, existingUser.password);
        if (!loggedIn) {
           return res.json("Invalid email or password");
        }

        
   
     const token  = jwt.sign({
        existingUser : existingUser._id, 
    } , JWT_USER_KEY);
     res.json({
        token:token
    });
   
})

userRouter.get("/purchases", userMiddelware,async (req,res) =>{
 const userId = req.userId;

 const purchases = await Purchase.Find({userId})

 cours
})







module.exports =  {
    userRouter
}