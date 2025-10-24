const express = require("express")
const courseRouter = express.Router();
const Purchase = require("../models/purchase.models.js");
const { userMiddelware } = require("../middlewares/user.middlewares.js");
const Course = require("../models/course.model.js");

courseRouter.post("/purchase", userMiddelware,async (req,res) =>{
 const userId = req.userId;
 const courseId = req.body.courseId;

 await Purchase.create({
    userId,
    courseId
 })
 res.json ("You have successfully purchased the course")

 })
courseRouter.get("/preview", async(req,res) =>{
  const courses = await Course.find();
  res.json(courses)
})

module.exports = {
    courseRouter
}