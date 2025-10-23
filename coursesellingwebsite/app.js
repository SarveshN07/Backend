const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { userRouter } = require("./routes/user.routes.js")
const { courseRouter } = require("./routes/courses.routes.js")
const { adminRouter} = require("./routes/admin.routes.js")
const connectDB = require("./db");
dotenv.config();

//middlewares config 
connectDB(); 
app.use(express.json())
app.use(express.urlencoded({extended:true}));


// end of middlewares


app.use("/api/v1/admin" , adminRouter);
app.use("/api/v1/user" , userRouter);
app.use("/api/v1/course" , courseRouter);





app.listen(process.env.PORT);
