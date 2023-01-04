const mongoose = require('mongoose')
const movieSchema = require('../Schema/moviesSchema.js')

const Movies = mongoose.model("Movie" ,movieSchema)

module.exports = Movies
