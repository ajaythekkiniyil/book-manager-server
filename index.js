const express = require('express')
const app = express()
const connectDb = require('./helper/dbConnection')
const bookModel = require('./models/book')
const bodyParser = require('body-parser')

// database connection
connectDb()

// Parse incoming request bodies
app.use(bodyParser.json())

// serving static html file
app.use(express.static('public'));

// create new book
app.post('/create-book', async (req, res) => {
    const { title, author, summary } = req.body

    const newBook = new bookModel({
        title: title,
        author: author,
        summary: summary
    })

    try {
        const savedBook = await newBook.save()
        res.status(200).json(savedBook)
    }
    catch (err) {
        res.status(500).json({ "error while creating new book": err })
    }
})

// get all books
app.get('/get-all-books', async (req, res) => {
    try {
        const books = await bookModel.find({})
        res.status(200).json(books)
    }
    catch (err) {
        res.status(500).json({ "error while get all books": err })
    }
})

// get details of book by id
app.get('/get-book-details/:bookId', async (req, res) => {
    const { bookId } = req.params
    try {
        const book = await bookModel.findOne({ _id: bookId })
        res.status(200).json(book)
    }
    catch (err) {
        res.status(500).json({ "error while get specific book details": err })
    }
})

// update book
app.put('/update-book/:bookId', async (req, res) => {
    const { bookId } = req.params

    try {
        await bookModel.findOneAndUpdate({ _id: bookId }, req.body)
        res.status(200).json({ status: true, message: 'book updated' })
    }
    catch (err) {
        res.status(500).json({ "error while updating specific book details": err })
    }
})

// delete book
app.delete('/delete-book/:bookId',async(req,res)=>{
    const { bookId } = req.params

    try {
        await bookModel.findOneAndDelete({ _id: bookId })
        res.status(200).json({ status: true, message: 'book deleted' })
    }
    catch (err) {
        res.status(500).json({ "error while deleting specific book": err })
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started on port: ${port}`))