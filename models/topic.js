const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    topic_name: String
})

module.exports = mongoose.model('topic', topicSchema)