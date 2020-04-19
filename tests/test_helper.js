const Blog = require('../models/blog')

const initialEntries = [
  {
    title: 'Entry 1',
    author: 'Carlos',
    url: 'URL1',
    likes: '3'
  },
  {
    title: 'Entry 2',
    author: 'Carlos',
    url: 'URL2',
    likes: '5'
  }
]

const nonExistingId = async () => {
    const blog = new Blog({ content: 'willremovethissoon' })
    await blog.save()
    await blog.remove()
    return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
    initialEntries, nonExistingId, blogsInDb
  }
