const express = require('express')
const fs = require('fs')
const path = require('path')
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold
} = require('@google/generative-ai')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const generationConfig = {
  temperature: 0.9,
  topK: 1,
  topP: 1,
  maxOutputTokens: 2048
}
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
module.exports.getBardResponse = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(Buffer.from(req.file.filename));
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=AIzaSyCX2eiHqdcOb6vXUWKQo2PgDZvQDjguhOE",{
      method:"POST",
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        contents:[{parts:[
          {text:"What is the details of picture"},
          {inlineData:{
            mimeType:"image/jpeg",
            data: Buffer.from(req.file.filename).toString('base64')
          }}
        ]}]
      })
    })
    const responseData = await response.json();
    // console.log('API response:', responseData);
    deleteImage(req.file.filename)
    res.status(200).json({
      status: 'success',
      message: responseData
    })
  } catch (error) {
    deleteImage(req.file.filename)
    res.status(400).json({
      status: 'Fail',
      message: error.message
    })
  }
}
