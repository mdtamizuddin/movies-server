const mongoose = require('mongoose')
const emailSchema = require('../Schema/emailSchema')

const Email = mongoose.model("Email", emailSchema)

module.exports = Email
