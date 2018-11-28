const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    image: String,
    toDo: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ToDo'
        }
    ]
})