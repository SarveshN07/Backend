const { Router } = require("express")
const   Admin  = require("../models/admin.models.js")
const bcrypt = require("bcrypt")
const jwt  =  require("jsonwebtoken")
const JWT_Admin_KEY = "sdadsadawdawdb"
const {adminMiddelware} = require("../middlewares/admin.middlewares.js")
const Course = require("../models/course.model.js")
const adminRouter = Router()

adminRouter.post("/signup",async (req,res) =>{
        const { email , password , firstName , lastName } = req.body;
        
      const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }
      
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
          
      let createdAdmin = await Admin.create({
          email,
          password : hashedPassword,
          firstName,
          lastName
      })
       
       res.send( "Sigup Successfully");
})

adminRouter.post("/signin", async (req,res) =>{
 const { email , password } = req.body;
 
 const existingAdmin = await Admin.findOne({ email });
        if (!existingAdmin) {
            return res.json("Invalid email or password");
        }

        const loggedIn = await bcrypt.compare(password, existingAdmin.password);
        if (!loggedIn) {
           return res.json("Invalid email or password");
        }

        
   
     const token  = jwt.sign({
        existingAdmin : existingAdmin._id, 
    } , JWT_Admin_KEY);
     res.json({
        token:token
    });
})

adminRouter.post("/course", adminMiddelware , async (req,res) =>{
 const  adminId = req.userId;
 const { title ,description ,price } = req.body

   let createdCourse =  await Course.create({
    title,
    description,
    price,
    creatorId : adminId

   })

   res.json("Course created")
})

adminRouter.put ("/course",adminMiddelware, async (req,res) =>{
   const adminId  =req.userId;
   const { title ,description ,price } = req.body

   const existingCourse =  await Course.findOne({title, creatorId: adminId})
   if(existingCourse){
    existingCourse.title = title ;
    existingCourse.description = description ;
    existingCourse.price = price ;
    await existingCourse.save();
    res.json("course updated succesfully")
   }else{
    res.json("Course doesnt exist ")
   }

})

adminRouter.get("/course/bulk", adminMiddelware,async (req,res) =>{
    const adminid = req.userId;
    
    const allCourses = await Course.find({  creatorId : adminid})

    res.send(allCourses)
 
})




module.exports =  { 
    adminRouter

}
