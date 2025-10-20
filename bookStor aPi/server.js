const express  = require("express")
const app = express();

const bookRouter = require("./routes/book.routes.js");


app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/" , bookRouter)



app.listen(4000);