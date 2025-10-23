const mongoose = require("mongoose")
const User = require("./admin.models.js");


const courseSchema = mongoose.Schema({
    title : String,
    description : String,
    price : Number,
    creatorId  : {
        type : mongoose.Schema.ObjectId,
        ref : "Admin"

    }
})

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;