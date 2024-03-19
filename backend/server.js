const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { query } = require('express')
const path = require('path')
const connectDB = require('./Utilis/dbConfig')
require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

// Database Connection
connectDB()

const userRouter = require('./Models/User/User.routes.js')
const productRouter = require('./Models/Product/Product.route')
const BardRouter = require('./Models/BardAI/BardAI.route')

app.get('/', (req, res) => {
  res.send('Welcome to Kita Hack')
})

// Get the image
app.get('/images/:filename', (req, res) => {
  const { filename } = req.params
  const imagePath = path.join(__dirname, './images/products/', filename)

  res.sendFile(imagePath)
})

app.listen(PORT, () => {
  console.log('Listening on port ', PORT)
  app.use('/api/v1/users', userRouter)
  app.use('/api/v1/products', productRouter)
  app.use('/api/v1',BardRouter)
})
