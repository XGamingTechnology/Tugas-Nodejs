const express = require('express')
const router = express.Router()

const UserController = require('../Controllers/user.controller')

/**
 * @swagger
 * /api/user:
 *   get:
 *     description: Get all user
 *     responses:
 *       200:
 *         description: Success mendapat data
 *       500:
 *         description: Internal Server error
 */

router.get('/user', UserController.getAllUser)
router.post('/user', UserController.createUser)
router.put('/user/:id', UserController.updateUser)

module.exports =router