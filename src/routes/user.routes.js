const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/user.controller')

router.get('/users', UserController.getAllUser)

module.exports =router