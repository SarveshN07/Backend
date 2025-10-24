const jwt = require("jsonwebtoken")
const JWT_USER_KEY = "abasajsnccsa"

function userMiddelware (req,res,next) { 
  
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_USER_KEY);

    if(decoded){
        req.userId = decoded.id ;
        next();
     }
     else{
        res.json("You are not signed in ")
     }

}

module.exports = {
    userMiddelware
}