const mongoose = require('mongoose')
const supertest = require('supertest')
const User = require('../models/user')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

//const Blog = require('../models/blog')


beforeEach(async () => {
  await User.deleteMany({})
  await User.insertMany(helper.initialUsers)
})


describe('tests related to users', () => {
  test('users with wrong form cannot be added to db', async () => {

    const response = await api.get('/api/users')

    expect(response.body).toHaveLength(3)

    const newUser1 = {
      username: 'MM',
      name: 'Maisku M',
      password: 'dkgdlskme'
    }


    const newUser2 = {
      username: 'MaMa',
      name: 'Maisku M',
      password: 'ld'
    }

    await api
      .post('/api/users')
      .send(newUser1)
      .expect(400)

    await api
      .post('/api/users')
      .send(newUser2)
      .expect(400)

  })
})

afterAll(() => {
  mongoose.connection.close()
})

