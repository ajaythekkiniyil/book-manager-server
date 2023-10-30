const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary:{
        type: String,
    }
})

module.exports = mongoose.model('book', bookSchema)
