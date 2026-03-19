const mongoose = require('mongoose')

const userAuthSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profile: String
})

module.exports = mongoose.model('userauth', userAuthSchema)