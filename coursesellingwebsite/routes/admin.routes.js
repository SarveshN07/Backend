const { Router } = require("express")


const adminRouter = Router()

adminRouter.post("/signup",(req,res) =>{
 res.send("hello")
})

adminRouter.post("/signin",(req,res) =>{
 res.send("hello")
})

adminRouter.get("/",(req,res) =>{
 res.send("hello")
})

adminRouter.put ("/",(req,res) =>{
 res.send("hello")
})

adminRouter.get("/bulk",(req,res) =>{
 res.send("hello")
})




module.exports =  { 
    adminRouter

}
