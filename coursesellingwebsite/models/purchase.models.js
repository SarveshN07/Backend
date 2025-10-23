const mongoose = require("mongoose");
const Course = require("./course.model.js");
const User = require("./users.models.js");


const purchaseSchema = mongoose.Schema({
    courseId  : {
        type : mongoose.Schema.ObjectId,
        ref : "Course"
    },
    userId  : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    }
})


const Purchase = mongoose.model("Purchase",purchaseSchema);

module.exports = Purchase;