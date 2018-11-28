const User = require('../models/User')
const mongoose = require('./connections')

const joe = new User({
    name: 'Joe Lee'
})

User.remove({})
    .then(() => joe.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())