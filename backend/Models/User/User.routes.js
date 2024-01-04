const express = require('express')
const { postUser, getUser, updateProfile } = require('./User.controller')
const router = express.Router()

// TODO: use the verifyToken function
router.route('/update-profile/:id').put(updateProfile)
router.route('/signup').post(postUser)
// TODO: use the verifyToken function
router.route('/login').get(getUser)

module.exports = router
