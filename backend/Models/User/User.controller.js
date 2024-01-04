const express = require('express')
const { ObjectId } = require('mongodb')
const User = require('./User.modules')

module.exports.postUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body)
    res.status(200).json({
      status: 'success',
      message: 'User Created successfully',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to insert User',
      error: error.message
    })
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const decodedEmail = req.user
    const { email } = req.body
    const result = await User.findOne({ email })

    if (!result) {
      return res.status(404).json({
        status: 'Fail',
        message: 'No user with this email'
      })
    }

    var sendData

    if (result.Admin) {
      const { products, ...others } = result.toObject()
      sendData = others
    } else {
      const { companyName, products, ...others } = result.toObject()
      sendData = others
    }
    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: sendData
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to login',
      error: error.message
    })
  }
}
