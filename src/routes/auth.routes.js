const express = require('express')
const router = express.Router()

const authController = require('../Controllers/auth.controller')

router.post('/auth/login', authController.login)

module.exports = router