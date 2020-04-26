const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const cors = require('cors')
const bodyParser = require('body-parser')


blogRouter.use(cors())
blogRouter.use(bodyParser.json())


blogRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})


blogRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

//ex 4.13
blogRouter.delete('/:id', async (request, response) => {
	await Blog.findByIdAndRemove(request.params.id);
	response.status(204).end();
})

module.exports = blogRouter