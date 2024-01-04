const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { query } = require('express')
const connectDB = require('./Utilis/dbConfig')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

// Database Connection
connectDB()

const userRouter = require('./Models/User/User.routes.js')

app.get('/', (req, res) => {
  res.send('Welcome to Kita Hack')
})

app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
  app.use('/api/v1/users', userRouter)
})
