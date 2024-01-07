const express = require('express')
const uploader = require('../../Middleware/fileUpload/uploader')
const { postProducts, getAllProducts } = require('./Product.controller')

const router = express.Router()

// TODO : use verify token
router.route('/create-product').post(uploader.single('image'), postProducts)
// TODO : use verify token
router.route('/').get(getAllProducts)

module.exports = router
