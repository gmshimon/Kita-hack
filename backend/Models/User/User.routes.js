const express = require('express')
const { postUser, getUser, updateProfile, getMyBid } = require('./User.controller')
const verifyToken = require('../../Middleware/verifyToken')
const router = express.Router()

router.route('/my-bid').get(verifyToken,getMyBid)

// TODO: use the verifyToken function
router.route('/update-profile/:id').put(updateProfile)
router.route('/signup').post(postUser)
// TODO: use the verifyToken function
router.route('/login').get(getUser)

module.exports = router
