const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const { ObjectId } = require('mongodb')

const userSchema = mongoose.Schema(
  {
    fullName: {
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
    phoneNumber: {
      type: String
    },
    address: {
      type: String
    },
    role:{
      type: String,
      enum :['seller','buyer'],
      default: 'seller'
    },
    Admin: {
      type: Boolean,
      default: false
    },
    companyName: {
      type: String
    },
    position: {
      type: String
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

userSchema.pre('save', function (next) {
  if (!this.Admin) {
    this.companyName = ''
    this.position = ''
  }
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
