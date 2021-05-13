import React from 'react'
import { useSelector } from 'react-redux'
import {
  Link
} from 'react-router-dom'
//import { Table } from 'react-bootstrap'
//import lodash from 'lodash'


const Users = () => {

  const blogs = useSelector(state => state.blogs)
  console.log(blogs)

  const reducer1 = (a, b) => {
    const usernames = a.map(d => d.username)
    console.log(usernames)
    if (usernames.includes(b.user.username)) {
      console.log('joko käydään täällä')
      a.map(c => {
        if (c.username === b.user.username) {
          c.blogs = c.blogs + 1
        }})
    } else {
      a.push({
        username: b.user.username,
        id: b.user.id,
        blogs: 1,
        key: a.length
      })
      console.log('AAAA')
      console.log(a)
    }
    return a
  }

  const numberOfBlogs = blogs.reduce(reducer1, [])

  return (
    <div>
      <h2>Users</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>blogs created</th>
          </tr>
          {numberOfBlogs.map(user =>
            <User
              key={user.key}
              user={user}
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

const User = ({ user }) => {
  const link = `/users/${user.id}`
  return (
    <tr>
      <td>
        <Link to={link}>
          {user.username}
        </Link>
      </td>
      <td>{user.blogs}</td>
    </tr>
  )
}


export default Users