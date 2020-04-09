const express = require('express')
const mongoose = require('mongoose')
const blogRouter = require ('./controllers/blogs')
const app = express()


const mongoUrl = 'mongodb+srv://fullstack:fullstack@cluster0-5uh6a.mongodb.net/bloglist?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true })

app.use('/api/blogs', blogRouter)

module.exports = app