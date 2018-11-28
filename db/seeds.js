const User = require('../models/User')
const ToDo = require('../models/ToDo')
const mongoose = require('./connections')

const clean = new ToDo({
    task: 'clean out fridge'
})

const joe = new User({
    name: 'Joe Lee',
    toDo: clean
})

User.remove({})
    .then(() => ToDo.remove({}))
    .then(() => ToDo.insertMany(clean))
    .then(() => joe.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())