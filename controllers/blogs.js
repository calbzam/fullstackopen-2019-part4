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

//ex 4.14
blogRouter.put('/:id', async (request, response) => {
  const blogToUpdate = await Blog.findById(request.params.id);
  const dataToUpdate = {
    likes: blogToUpdate.likes + 4,
  };

  const updatedBlog = await Blog.findByIdAndUpdate(
    request.params.id,
    dataToUpdate,
    { new: true },
  );
  response.json(updatedBlog.toJSON());
})

module.exports = blogRouter