const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({})
    .populate('user', { username: 1, name: 1 })

  response.json(blogs.map(blog => blog.toJSON()))
})

/*
const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}
*/

blogsRouter.post('/', async (request, response) => {
  console.log(request.body)
  const body = request.body

  //const token = getTokenFrom(request)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    comments: [],
    user: user._id
  })

  const savedBlog = await blog.save()
  console.log('Saved blog!')
  console.log(savedBlog)
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()

  response.status(201).json(savedBlog.toJSON())
})

blogsRouter.post('/:id/comments', async (request, response) => {
  console.log('REQUEST')
  console.log(request.body)
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  console.log('TULEEKO IIIDEETÄ')
  console.log(request.params.id)
  const blog = await Blog.findById(request.params.id)

  blog.comments = blog.comments.concat(body.comment)
  console.log('LISIIKÖ KOMMENTIT?')
  console.log(blog)
  const savedBlog = await blog.save()

  response.status(201).json(savedBlog.toJSON())
})

blogsRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const blog = await Blog.findById(request.params.id)

  if (blog.user.toString() === user._id.toString()) {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }

  return response.status(401).json({ error: 'Users cannot cross delete blogs' })

})

blogsRouter.put('/:id', async (request, response) => {
  const blog = request.body
  console.log('BLOGI')
  console.log(blog)
  const updatedBlog = await Blog.findByIdAndUpdate(blog.id, blog, { new: true })
  //const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
  response.json(updatedBlog.toJSON())
})

module.exports = blogsRouter