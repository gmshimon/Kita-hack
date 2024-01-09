var admin = require('firebase-admin')

// firebase admin initialization
// var serviceAccount = require('../kita-hack-firebase-credentials.json')
var serviceAccount = require('../fir-practise-f9311-firebase-adminsdk-pgwft-67ed2d1226.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

module.exports = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({
        status: 'fail',
        message: 'You are not login'
      })
    }
    const decoded = await admin.auth().verifyIdToken(token)
    req.user = decoded.email
    next()
  } catch (err) {
    res.status(403).json({
      status: 'fail',
      message: 'Invalid token',
      error: err.message
    })
  }
}
