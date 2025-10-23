const express = require("express")
const  userRouter = express.Router();


userRouter.post("/signup" ,(req,res) =>{
 res.send("hello")
})

userRouter.post("/signin",(req,res) =>{
 res.send("hello")
})

userRouter.get("/purchases",(req,res) =>{
 res.send("hello")
})







module.exports =  {
    userRouter
}