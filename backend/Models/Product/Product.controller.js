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

const compareDate = (startDate, endDate) => {
  const start_data = new Date(startDate)
  const end_data = new Date(endDate)
  if (end_data.getTime() > start_data.getTime()) return true
  else return false
}

module.exports.postProducts = async (req, res, next) => {
  try {
    // TODO: get the user email from token
    const email = req.user
    const data = req.body
    console.log(req.file)
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
      data: user
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

module.exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.find({})
    result.map(async pro => {
      const dateCompare = compareDate(pro.starting_time, pro.bidding_duration)
      if (!dateCompare) {
        const maxBid = pro.bids.reduce(
          (max, bid) => (bid.price > max.price ? bid : max),
          pro.bids[0]
        )
        const updateDate = await Product.updateOne(
          { _id: pro.id },
          {
            $set: {
              active: false,
              winner: {
                company: maxBid?.company,
                price: maxBid.price,
                date: maxBid.date
              }
            }
          }
        )
        console.log(updateDate)
      }
    })
    const result2 = await Product.find({})
      .populate({
        path: 'createdBy',
        select: 'fullName email _id position'
      })
      .populate({
        path: 'winner.company',
        select: 'fullName email _id companyName'
      })
      .populate({
        path: 'bids.company',
        select: 'fullName email _id companyName'
      })
    res.status(200).json({
      status: 'success',
      message: 'Product found successfully',
      data: result2
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: 'Fail to Fetch food'
    })
  }
}

module.exports.getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await Product.findOne({ _id: id })
    const dateCompare = compareDate(
      result.starting_time,
      result.bidding_duration
    )
    if (!dateCompare) {
      const maxBid = result.bids.reduce(
        (max, bid) => (bid.price > max.price ? bid : max),
        bids[0]
      )
      const updateDate = await Product.updateOne(
        { _id: id },
        {
          $set: {
            active: false,
            winner: {
              company: maxBid?.company,
              price: maxBid.price,
              date: maxBid.date
            }
          }
        }
      )
    }
    const result2 = await Product.findOne({ _id: id })
      .populate({
        path: 'bids.company',
        select: 'fullName email _id companyName'
      })
    res.status(200).json({
      status: 'Success',
      message: 'Data successfully retrieved',
      data: result2
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    })
  }
}

/* 
  const data = {
    productId:_id,
    price:price,
  }
*/

module.exports.makeBidding = async (req, res, next) => {
  try {
    const email = req.user
    const body = req.body

    console.log(req)
    console.log(email)
    // get the product first
    const product = await Product.findOne({ _id: body.productId })
    // find the user
    const user = await User.findOne({ email: email })

    // if (!product?.active) {
    //   return res.status(401).json({
    //     status: 'Fail',
    //     message: 'The bidding date closed'
    //   })
    // }

    if (body.price < product.starting_price) {
      return res.status(401).json({
        status: 'Fail',
        message: 'Cannot bid less than base price'
      })
    }

    const maxBid = Math.max(...product.bids.map(bid => bid.price))

    if (body.price <= maxBid) {
      return res.status(401).json({
        status: 'Fail',
        message: `Bid more than ${maxBid}`
      })
    }

    const result = await Product.updateOne(
      { _id: body.productId },
      {
        $push: {
          bids: {
            company: user._id,
            price: body.price
          }
        }
      }
    )
    if (result?.modifiedCount != 1) {
      return result.status(500).json({
        status: 'Fail',
        message: 'Failed to update the bidding'
      })
    }
    const updateUser = await User.updateOne({ _id: user._id },
      {
        $push: {
          bids: {
            product: product._id,
            price: body.price
          }
        }
      }
    )
    res.status(200).json({
      status: 'success',
      message: product
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    })
  }
}


module.exports.getUserBidding = async (req, res, next) => {
  try {
    const email = req.user

    const user = await User.findOne({ email: email })
    const result = await Product.findOne({ createdBy: user?._id })

    const dateCompare = compareDate(
      result.starting_time,
      result.bidding_duration
    )
    if (!dateCompare) {
      const maxBid = result.bids.reduce(
        (max, bid) => (bid.price > max.price ? bid : max),
        bids[0]
      )
      const updateDate = await Product.updateOne(
        { _id: id },
        {
          $set: {
            active: false,
            winner: {
              company: maxBid?.company,
              price: maxBid.price,
              date: maxBid.date
            }
          }
        }
      )
    }

    const product = await Product.findOne({ createdBy: user?._id }).populate({
      path: 'createdBy',
      select: 'fullName email _id position'
    })
      .populate({
        path: 'winner.company',
        select: 'fullName email _id companyName'
      })
      .populate({
        path: 'bids.company',
        select: 'fullName email _id companyName'
      })
    res.status(200).json({
      status: "success",
      message: "Product was successfully fetched",
      data: product
    })
  } catch (error) {
    res.status(400).json({
      status: 'Fail',
      message: error
    })
  }
}