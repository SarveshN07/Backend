    const mongoose = require("mongoose")


    const adminSchema = mongoose.Schema({
        email : String,
        password : String,
        firstName : String,
        lastName  : String
    })

    const Admin = mongoose.model("Admin",adminSchema);

    module.exports = Admin;