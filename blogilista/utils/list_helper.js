
const dummy = (blogs) =>  1

const totalLikes = (blogs) => {
  const result = blogs.map(b => b.likes)
  const reducer = (total, b) => total + b
  return result.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  const reducer2 = (a, b) => {
    console.log('a')
    console.log(a)
    console.log('b')
    console.log(b)
    if (a.likes >= b.likes)
      return a
    else
      return b
  }

  const initialBlog = {
    '__v': 0,
    '_id': '5a422aa71b54a676234d17f8',
    'author': 'test',
    'likes': 0,
    'title': 'test',
    'url': 'http://www.test.fi'
  }
  return blogs.reduce(reducer2, initialBlog)
}

const mostBlogs = (blogs) => {

  const reducer3 = (a, b) => {
    const currentBlogs = a.map(blog => blog.author)
    if (currentBlogs.includes(b.author)) {
      a.map(a => {
        if (a.author === b.author) {
          a.blogs += 1
        }
      })
    } else {
      a.push(
        {
          'author': b.author,
          'blogs': 1
        }
      )
    }

    return a
  }

  const reducer4 = (a, b) => {
    if (a.blogs > b.blogs) {
      return a
    } else {
      return b
    }
  }


  const numberOfVotesOfBlogs = blogs.reduce(reducer3, [])

  return numberOfVotesOfBlogs
    .reduce(
      reducer4,
      {
        'author': 'empty',
        'blogs': 0
      }
    )
}

const mostLikes = (blogs) => {
  const reducer5 = (a, b) => {
    const currentBlogs = a.map(blog => blog.author)
    if (currentBlogs.includes(b.author)) {
      a.map(a => {
        if (a.author === b.author) {
          a.likes += b.likes
        }
      })
    } else {
      a.push(
        {
          'author': b.author,
          'likes': b.likes
        }
      )
    }

    return a
  }

  const reducer6 = (a, b) => {
    if (a.likes > b.likes) {
      return a
    } else {
      return b
    }
  }

  const numberOfLikesOfBlogs = blogs.reduce(reducer5, [])

  return numberOfLikesOfBlogs
    .reduce(
      reducer6,
      {
        'author': 'empty',
        'likes': 0
      }
    )
}

const otherListWithManyBlogs =
    [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 20,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 100,
        __v: 0
      },
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Some other',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 100,
        __v: 0
      }
    ]



module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}