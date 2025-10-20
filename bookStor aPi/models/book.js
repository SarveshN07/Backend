const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()


mongoose.connect(process.env.MONGO_URI);

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"]
    },
    author: {
        type: String,
        required: [true, "Author name is required"]
    },
    genre: String,
    publishedYear: {
        type: Number,
        required: [true, "Published year is required"]
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;