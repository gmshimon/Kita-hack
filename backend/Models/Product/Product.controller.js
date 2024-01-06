const express = require('express')
const fs = require('fs')
const path = require('path')
const Product = require('./Product.modules')
const User = require('../User/User.modules')

const deleteImage = file => {
  const filePath = path.join(__dirname, '../../images/products', file)
  fs.unlink(filePath, unlinkError => {
    if (unlinkError) {
      console.error('Failed to delete the uploaded file:', unlinkError)
    } else {
      console.log('Uploaded file deleted successfully.')
    }
  })
}

module.exports.postProducts = async (req, res, next) => {
  try {
    // TODO: get the user email from token

    const newData = req.body
    const { email, ...data } = newData

    // get the user data
    const user = await User.findOne({ email: email })

    const image =
      req.protocol + '://' + req.get('host') + '/images/' + req.file.filename
    data.imageURL = image
    data.createdBy = user._id

    // create the product
    const productCreate = await Product.create(data)
    if (productCreate?._id) {
      const updateUser = await User.updateOne(
        { _id: user._id },
        {
          $push: { products: productCreate?._id }
        }
      )
    }
    res.status(200).json({
      status: 'success',
      data: productCreate
    })
  } catch (error) {
    if (req.file) {
      deleteImage(req.file.filename)
    }
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
