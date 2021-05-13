const mongoose = require('mongoose')
const supertest = require('supertest')

const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')
const User = require('../models/user')
const helper = require('./test_helper')
const jwt = require('jsonwebtoken')

const userForLogin =  helper.loginUser //.username, helper.initialUsers[0].password }
console.log('USER FOR LOGIN')
console.log(userForLogin)


beforeEach(async () => {
  await Blog.deleteMany({})
  await Blog.insertMany(helper.initialBlogs)
  await User.deleteMany({})
  await api.post('/api/users').send(helper.initialUsers[0])
  
  //await User.insertMany(helper.initialUsers)
})

describe('REST Tests', () => {
  test('db has right amount of blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(5)
  })

  test('id field of blog is properly defined', async () => {
    const response = await api.get('/api/blogs')
    console.log(response.body)

    expect(response.body[0].id).toBeDefined()
  })

  test('blogs can be added', async () => {

    const username = helper.loginUser['username']
    const password = helper.loginUser['password']
    const login = await api.post('/api/login').send(helper.loginUser)//auth(username, password)
    
    const token = login.body.token
    console.log('LOGIN')
    console.log(token)
    console.log(username)
    console.log(password)


    const newBlog = {
      title: 'Jaadajaada',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
    }

    await api
      .post('/api/blogs')
      .set('Authorization', 'Bearer ' + token)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

    const titles = blogsAtEnd.map(r => r.title)
    expect(titles).toContain('Jaadajaada')
  })

  test('if a blog is added with no likes information the default will be 0', async () => {

    const login = await api.post('/api/login').send(helper.loginUser)//auth(username, password)
    const token = login.body.token

    const newBlog = {
      title: 'Jaadajaada',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    }

    await api
      .post('/api/blogs')
      .set('Authorization', 'Bearer ' + token)
      .send(newBlog)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd[blogsAtEnd.length - 1].likes).toEqual(0)

  })

  test('blogs without title or url should return status 400', async () => {
    const newBlogWithoutTitle = {
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 10,
    }

    const newBlogWithoutUrl = {
      title: 'Jaadajaada',
      author: 'Edsger W. Dijkstra',
      likes: 20,
    }

    await api
      .post('/api/blogs')
      .send(newBlogWithoutTitle)
      .expect(400)

    await api
      .post('/api/blogs')
      .send(newBlogWithoutUrl)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})