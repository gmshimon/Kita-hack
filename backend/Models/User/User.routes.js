const express = require('express')
const { postUser, getUser } = require('./User.controller')
const router = express.Router()

router.route('/signup').post(postUser)
router.route('/login').get(getUser)

module.exports = router
