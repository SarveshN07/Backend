const jwt = require("jsonwebtoken")
const JWT_Admin_KEY = "sdadsadawdawdb"



function adminMiddelware (req,res,next) { 
  
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_Admin_KEY);

    if(decoded){
        req.userId = decoded.id ;
        next();
     }
     else{
        res.json("You are not signed in ")
     }

}
module.exports = {
    adminMiddelware
}