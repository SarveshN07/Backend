const express = require("express");
const app = express();
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser");
const User = require("./user.model.js")
const bcrypt = require("bcrypt")


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post("/register", (req,res) =>{
    const { name, email , password} = req.body;
     
      bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(password,salt,(err,hash) =>{
            User.create(
            {
                name,
                email,
                password:hash,
            
            },         
        ).then(createdUser => {
            res.send(createdUser)
        });
            
        })
    })
    
    
})

app.listen(4000,()=>{
    console.log("Server is listinening ")
});
