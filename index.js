const express = require('express')
const app = express()
const connectDb = require('./helper/dbConnection')
const bookModel = require('./models/book')

// database connection
connectDb()

// routes
app.get('',(req,res)=>{
    res.send('hi')
})

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`server started on port: ${port}`))