const mongoose = require("mongoose");


mongoose.connect("UR Mongo Uri")

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password: String
})

const User = mongoose.model("User",userSchema)


module.exports = User;