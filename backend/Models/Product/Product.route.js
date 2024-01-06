const express = require('express')
const uploader = require('../../Middleware/fileUpload/uploader')
const { postProducts } = require('./Product.controller')

const router = express.Router()

// TODO : use verify token
router.route('/create-product').post(uploader.single('image'), postProducts)

module.exports = router
