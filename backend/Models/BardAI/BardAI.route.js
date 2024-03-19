const express = require('express')
const { getBardResponse } = require('./BardAI.controller')
const uploader = require('../../Middleware/fileUpload/uploader')
const router = express.Router()

router.route('/bard_ai').post(uploader.single('image'),getBardResponse)

module.exports = router