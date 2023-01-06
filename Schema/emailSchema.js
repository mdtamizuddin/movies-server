const mongoose = require('mongoose')

const emailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        default: 15
    },
    date: {
        type: Date,
        default: new Date
    }
})

module.exports = emailSchema
