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

function addDaysToDate (customDate, daysToAdd) {
  const inputDate = new Date(customDate)
  const newDate = new Date(
    inputDate.getTime() + daysToAdd * 24 * 60 * 60 * 1000
  )

  // Formatting the new date (optional)
  const year = newDate.getFullYear()
  const month = newDate.getMonth() + 1
  const day = newDate.getDate()
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${
    day < 10 ? '0' + day : day
  }`

  return formattedDate
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
    type: String,
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
  createdBy: {
    type: ObjectId,
    ref: 'User'
  },
  active: {
    type: Boolean
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
      date: {
        type: String,
        default: getTodaysDate()
      }
    }
  ]
})

ProductSchema.pre('save', function (next) {
  const result = addDaysToDate(
    this.starting_time,
    parseFloat(this.bidding_duration)
  )
  const date1 = new Date(this.starting_time)
  const date2 = new Date(result)
  this.bidding_duration = result
  if (date2.getTime() > date1.getTime()) {
    this.active = true
  } else {
    this.active = false
  }
  next()
})

const Product = mongoose.model('products', ProductSchema)

module.exports = Product
