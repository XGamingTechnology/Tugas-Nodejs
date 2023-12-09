const express = require('express')
const { upload } = require('../middlewares/multer')
const router = express.Router()

const uploadController = require('../Controllers/upload.controller')

router.post('/upload', upload.single('file'),uploadController.upload)


module.exports = router