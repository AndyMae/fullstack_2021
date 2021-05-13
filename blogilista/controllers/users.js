const usersRouter = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


usersRouter.post('/', async (request, response) => {
  const body = request.body

  const saltRounds = 10

  if (body.password.length < 3) {
    return response.status(400).json({ error: 'Password should be longer than 3 letters' })
  }

  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash
  })

  const savedUser = await user.save()
  response.json(savedUser.toJSON())

})

usersRouter.get('/', async (reques, response) => {
  const users = await User
    .find({})
    .populate('blogs', { likes: 1, title: 1, author: 1, url: 1 })

  response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter