const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config');
const blogRouter = require ('./controllers/blogs')
const app = express()


const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true })

app.use('/api/blogs', blogRouter)

module.exports = app