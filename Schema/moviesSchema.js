const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    actor: {
        type: String,
        required: true
    },
    categorys: {
      type: String,
      required: true
    },
    title: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    resulation: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    trailer: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    story: {
      type: String,
      default: ""
    },
    release: {
      type: String,
      default: ""
    },
    genre: {
      type: String,
      required: true
    },
    visit: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: ""
    },
    screenShoot: {
      type: Array,
      required: true
    },
    downloadLinks: {
      type: Array,
      required: true
    },

    date: {
      type: Date,
      default: new Date
    }
})

module.exports = movieSchema
