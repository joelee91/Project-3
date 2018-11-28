const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const ToDo = new Schema({
    task: String
})

module.exports = mongoose.model('ToDo', ToDo)