const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("public"));

const URI = process.env.DB_URI

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => {
        console.log("Database Connected")
    })
    .catch(err => {
        console.log("Something went Wrong")
    })

// Image Uploading Router
app.use("/api/images", express.static("images"));
app.use('/api/upload', require('./Routers/uploadImage'))

// Image Uploading Router
app.use('/api/movies', require("./Routers/moviesRouter"))
app.use('/api/categorys', require("./Routers/category"))


app.listen(5000, () => {
    console.log("Server Is Rinnging on http://localhost:5000")
})
