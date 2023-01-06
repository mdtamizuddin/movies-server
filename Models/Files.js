const mongoose = require('mongoose')
const fileSchema = require('../Schema/fileSchema')

const Files = mongoose.model("File" ,fileSchema)

module.exports = Files
