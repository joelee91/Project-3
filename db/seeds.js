const User = require('../models/User')
const ToDo = require('../models/ToDo')
const mongoose = require('./connections')

const clean = new ToDo({
    task: 'clean out fridge'
})

const fix = new ToDo({
    task: 'fix the tv'
})

const joe = new User({
    name: 'Joe Lee',
    toDo: [clean, fix]
})

User.remove({})
    .then(() => ToDo.remove({}))
    .then(() => ToDo.insertMany([clean, fix]))
    .then(() => joe.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())