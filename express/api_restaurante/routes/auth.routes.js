const express = require('express')
const router = express.Router()
const { registro, login } = require('../controller/auth.controller')

router.post('/register', registro) // /api/v1/auth/register
router.post('/login', login) // /api/v1/auth/login

module.exports = router