require('dotenv').config()

//let PORT = process.env.PORT
let PORT = 3018
let MONGODB_URI = process.env.MONGODB_URI

module.exports = {
  MONGODB_URI,
  PORT
}