const express = require('express')
const router = express.router()

const nationCrontroller = require('../Controllers/nation.controller')

router.post('nations', nationController.createNation)

module.exports = router