import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'

const UserInfo = () => {

  const match = useRouteMatch('/users/:id')
  console.log('match')
  console.log(match)

  const blogsOfUser = useSelector(state => {
    const toReturn = match
      ? state.blogs.filter(b => {
        console.log('BLOGI FILTERISSÄ')
        console.log(b.user.id)
        console.log(match.params.id)
        return (
          b.user.id === match.params.id
        )
      })
      : null
    return toReturn
  })

  console.log('Matching blogs')
  console.log(blogsOfUser)
  /*
  const blogsOfUser =
    match
      ? blog.filter(b => {
        console.log('BLOGI FILTERISSÄ')
        console.log(b.user.id)
        console.log(match.params.id)
        return (
          b.user.id === match.params.id
        )
      })
      : null
*/
  console.log(blogsOfUser)
  const nameFinder = (a, b) => {
    console.log('reducer')
    console.log(a)
    console.log(b)
    a = b.user.username
    return a
  }
  const username = blogsOfUser.reduce(nameFinder, '')
  console.log(username)

  return (
    <div>
      <h1>{username}</h1>
      {blogsOfUser !== null
        ? <div>
          <h2>added blogs</h2>
          <ul>
            {blogsOfUser.map(b =>
              <Blog
                key={b.id}
                blog={b}
              />
            )}
          </ul>
        </div>
        : <span>No blogs added yet</span>
      }
    </div>
  )
}

const Blog = ({ blog }) => {
  return (
    <li>{blog.title}</li>
  )
}


export default UserInfo