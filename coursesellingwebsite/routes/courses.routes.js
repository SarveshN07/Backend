const express = require("express")
const courseRouter = express.Router();


courseRouter.post("/purchase",(req,res) =>{
 res.send("hello")
})
courseRouter.get("/courses",(req,res) =>{
 res.send("hello")
})

module.exports = {
    courseRouter
}