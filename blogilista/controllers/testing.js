const router = require('express').Router()
const User = require('../models/user')
const Blog = require('../models/blog')

router.post('/reset', async (request, response) => {
  await Blog.deleteMany({})
  await User.deleteMany({})
  console.log('Kaikki poistettu alustettaessa testiä')

  response.status(204).end()
})

module.exports = router