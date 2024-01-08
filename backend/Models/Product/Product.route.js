const express = require('express')
const uploader = require('../../Middleware/fileUpload/uploader')
const { postProducts, getAllProducts } = require('./Product.controller')
const verifyToken = require('../../Middleware/verifyToken')

const router = express.Router()

// TODO : use verify token
router.route('/create-product').post(uploader.single('image'), postProducts)
// TODO : use verify token
router.route('/').get(verifyToken,getAllProducts)

module.exports = router
