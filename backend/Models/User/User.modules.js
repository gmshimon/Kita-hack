const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      validate: [validator.isEmail, 'Please enter a valid email'],
      required: [true, 'Email address is required'],
      lowercase: true,
      unique: true,
      trim: true
    },
    imageURL: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    address: {
      type: String
    },
    Admin: {
      type: Boolean,
      default: false
    },
    products: [
      {
        type: ObjectId,
        ref: 'products'
      }
    ]
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
