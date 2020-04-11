const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs
      .map(blog => blog.likes)
      .reduce((sum, item) => sum + item)
}

const favoriteBlog = (blogs) => {
  let likes = 0
  let favorite = {}
  blogs.forEach(blog => {
    if (blog.likes > likes)
    {
      likes = blog.likes
      favorite = blog
    }
  })
  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
