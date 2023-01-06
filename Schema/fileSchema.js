const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    storage: {
        type: Number,
        default: 15
    },
    date: {
        type: Date,
        default: new Date
    }
})

module.exports = fileSchema
