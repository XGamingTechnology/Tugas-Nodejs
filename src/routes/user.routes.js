const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/user.controller')

router.get('/user', UserController.getAllUser)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)

module.exports =router