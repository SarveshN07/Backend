const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    email : String,
    password : String,
    firstName : String,
    lastName  : String
})

const User = mongoose.model("User",UserSchema);

module.exports = User;