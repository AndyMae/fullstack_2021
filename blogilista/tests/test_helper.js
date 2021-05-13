const Blog = require('../models/blog')

const initialBlogs = [
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 10,
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 20,
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 100,
  },
  {
    title: 'Go To Statement Considered Harmful',
    author: 'Some other',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 100,
  }
]

const initialUsers = [
  {
    name: 'Antti',
    username: 'AndyM',
    password: 'plaaplaa'
  },
  {
    name: 'Alice',
    username: 'Maiju',
    password: 'blkaablkaa'
  },
  {
    name: 'Matilda',
    username: 'Maizku',
    password: 'kfdoweofj'
  }
]

const loginUser = {
  username: 'AndyM',
  password: 'plaaplaa'
}

const nonExistingId = async () => {
  const blog = new Blog({ title: 'plaaplaa', author: 'plabadiplaa', url: 'bla' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}


module.exports = {
  initialBlogs, initialUsers, loginUser, nonExistingId, blogsInDb
}