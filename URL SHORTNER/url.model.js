import mongoose from "mongoose";

 try {
    await mongoose.connect("you URL")
    
    console.log("Connected");
    
 } catch (error) {
    console.log("Not connected")
    
 }
 
 


 const urlSchema = mongoose.Schema(
 {
    shortId :{
        type:String,
        required: true,
        unique: true
    },
     originalUrl : {
        type:String,
        required: true,
    }
    
 },
 {timestamps:true}
);

const URL = mongoose.model("URL",urlSchema);

export default URL