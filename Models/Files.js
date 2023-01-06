const mongoose = require('mongoose')
const fileSchema = require('../Schema/fileSchema')

const Files = mongoose.model("AllFile" ,fileSchema)

module.exports = Files
