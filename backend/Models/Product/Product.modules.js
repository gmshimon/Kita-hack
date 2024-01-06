const mongoose = require('mongoose')
const validator = require('validator')
const { ObjectId } = require('mongodb')

function getTodaysDate () {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth() + 1 // Months are zero-based
  const day = today.getDate()

  const todaysDate = `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`
  return todaysDate
}

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide item name'],
    lowercase: true,
    minLength: [3, 'Name must be at least 3 characters']
  },
  weight: {
    type: String,
    required: [true, 'Please provide item weight']
  },
  starting_price: {
    type: Number,
    required: [true, 'Please provide starting price']
  },
  imageURL: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  type_of_waste: {
    type: String,

    required: [true, 'Please provide type of wastage']
  },
  starting_time: {
    type: String,
    default: getTodaysDate()
  },
  bidding_duration: {
    type: String
  },
  bids: [
    {
      company: {
        type: ObjectId,
        ref: 'User'
      },
      price: {
        type: String,
        required: [true, 'Please provide a valid price']
      },
      date
    }
  ]
})
