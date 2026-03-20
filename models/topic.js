const mongoose = require('mongoose')

const topicSchema = new mongoose.Schema({
    loginUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userauth'
    },
    languageList: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'langauge'
    },
    topic_name: String
})

module.exports = mongoose.model('topic', topicSchema)