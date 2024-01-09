const express = require('express')
const uploader = require('../../Middleware/fileUpload/uploader')
const { postProducts, getAllProducts, getSingleProduct, makeBidding, getUserBidding } = require('./Product.controller')
const verifyToken = require('../../Middleware/verifyToken')

const router = express.Router()

router.route('/user-bidding').get(verifyToken,getUserBidding)

// TODO : use verify token
router.route('/create-product').post(uploader.single('image'),verifyToken ,postProducts)
// TODO : use verify token
router.route('/').get(getAllProducts)

router.route('/make-bidding').post(verifyToken,makeBidding)
router.route("/:id").get(getSingleProduct)

module.exports = router
