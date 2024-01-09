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
      error: error.message.split(":")[1]
    })
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const decodedEmail = req.user // TODO: use the decoded email instead email
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

module.exports.updateProfile = async (req, res, next) => {
  try {
    const { id } = req.params
    const userDetails = req.body
    /* const userFieldName = [
      'fullName',
      'phoneNumber',
      'address',
      'companyName',
      'position'
    ]

    const query = { $set: {} }
    for (const key in userDetails) {
      const isKey = userFieldName.find(x => x === key)
      if (!isKey)
        return res.status(500).json({
          status: 'Fail',
          message: 'Failed to update user'
        })
      query.$set[key] = userDetails[key]
    } */
    const user = await User.findOne({ _id: id })
    if (!user) {
      return res.status(404).json({
        status: 'Fail',
        message: 'No user with this email'
      })
    }
    const result = await User.updateOne(
      { _id: id },
      {
        $set: userDetails
      }
    )
    if (result.modifiedCount == 1 && !user.Admin) {
      const result2 = await User.updateOne(
        { _id: id },
        {
          $set: { companyName: '', position: '' }
        }
      )
    }
    console.log(user)
    res.status(200).json({
      status: 'success',
      message: 'Verified',
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to update user',
      error: error.message
    })
  }
}

module.exports.getMyBid = async (req,res,next)=>{
  try {
    const email = req.user

    const user = await User.findOne({ email: email}).select("-products -createdAt -updatedAt -__v").populate({
      path:'bids.product',
      select:"name imageURL starting_price starting_time bidding_duration location"
    })
    res.status(200).json({
      status: 'success',
      message: 'Data saved successfully',
      data: user
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Failed to fetch data',
      error: error.message
    })
  }
}
