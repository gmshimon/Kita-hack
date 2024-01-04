// db.js
const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    //localhost:27017
    mongodb: await mongoose.connect(process.env.DB_URL)
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Error connecting to the database:', error.message)
  }
}

module.exports = connectDB
