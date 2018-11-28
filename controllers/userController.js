const User = require('../models/User')

const userController = {
    index: (req, res) => {
        User.find({})
            .then((user) => {
                res.send(users)
            })
    }
}

module.exports = userController