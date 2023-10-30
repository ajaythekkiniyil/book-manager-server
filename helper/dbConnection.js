const mongoose = require('mongoose')

const connectDb = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017/bookManager')
        .then(() => console.log('connected to database'))
        .catch((err) => console.log('error while connecting to database', err))
}

module.exports = connectDb