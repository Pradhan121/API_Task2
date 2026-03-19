const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: String,
    answer: String,
    marks: Number
})

module.exports = mongoose.model('question', questionSchema)