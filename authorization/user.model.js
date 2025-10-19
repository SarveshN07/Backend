const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://sarvesh:sarvesh123@cluster0.qt2xa.mongodb.net/authtest")

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password: String
})

const User = mongoose.model("User",userSchema)


module.exports = User;