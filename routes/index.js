const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/api/users', userController.index)
router.get('/api/users/:userId', userController.show)

module.exports = router