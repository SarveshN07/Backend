const express = require("express")
const bookRouter  = express.Router();
const Book = require("../models/book.js")



bookRouter.post("/register" ,  async (req,res) => {
    const { title , author , genre , publishedYear, isAvailable}  = req.body;

    let createdBook = await Book.create({
        title,
        author,
        genre,
        publishedYear,
        isAvailable,
    })

    res.send(createdBook)
     
})


bookRouter.get("/all" , async (req,res) => {
   let allBooks = await Book.find();
   res.send(allBooks)
}) 

bookRouter.delete("/delete/:Bookid" , async (req,res) => {
   let DeletedBooks = await Book.findByIdAndDelete(req.params.Bookid);
   res.send(DeletedBooks)
}) 


bookRouter.put("/update/:Bookid" ,  async (req,res) => {
    const { title , author , genre , publishedYear, isAvailable}  = req.body;

    let updatedBook = await Book.findByIdAndUpdate(req.params.Bookid,req.body,{new:true})


   
    res.send(updatedBook)
     
})

module.exports = bookRouter