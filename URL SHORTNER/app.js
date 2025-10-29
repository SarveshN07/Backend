import express from "express";
const app = express();
import URL from "./url.model.js";
import shortRouter from "./short.route.js"

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/" , (req,res) =>{
    res.send("hey")
})

app.use("/short" , shortRouter)




app.listen(4000)