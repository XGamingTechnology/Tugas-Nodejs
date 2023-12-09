const express = require('express')
const router = express.Router()
const Authentication = require('../middlewares/Authentication')

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

router.get('/user', Authentication.Authentication, UserController.getAllUser)
router.post('/user', UserController.createUser)

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     description: Update user
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID user
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 description: Nama lengkap
 *               email:
 *                 type: string
 *                 description: Email
 *     responses:
 *       200:
 *         description: Success ubah data
 *       500:
 *         description: Internal Server error
 */

router.put('/user/:id', UserController.updateUser)

module.exports =router