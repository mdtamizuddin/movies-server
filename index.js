const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())
// app.use(express.static("public"));

const URI = process.env.DB_URI
const PORT = process.env.PORT || 5000

// Image Uploading Router
app.use("/api/images", express.static("images"));
app.use('/api/upload', require('./Routers/uploadImage'))

// Image Uploading Router
app.use('/api/movies', require("./Routers/moviesRouter"))
app.use('/api/categorys', require("./Routers/category"))
app.use('/api/emails', require("./Routers/emailRouter"))
app.use('/api/files', require("./Routers/fileRouter"))


app.get('/', (req, res) => {
    res.send({ message: "Server Is Running" })
})

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})