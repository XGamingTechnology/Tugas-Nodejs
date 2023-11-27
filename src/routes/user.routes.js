const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/user.controller')

router.get('/user', UserController.getAllUser)
router.post('/user', UserController.createUser)

module.exports =router