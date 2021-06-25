import React from 'react'
import { useSelector } from 'react-redux'
import {
  Link
} from 'react-router-dom'
//import { Table } from 'react-bootstrap'
//import lodash from 'lodash'
import styled from 'styled-components'


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

  const StyledH2 = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    color: 333333;
  `

  const UserTableBackground = styled.div`
    background: #f1fde7;
  `

  const UserTable = styled.table`
    width: 50%;
  `

  const UserTableHeader = styled.th`
    background: #9bf057;
    color: white;
  `

  return (
    <div>
      <StyledH2>Users</StyledH2>
      <UserTableBackground>
        <UserTable>
          <tbody>
            <tr>
              <UserTableHeader>user</UserTableHeader>
              <UserTableHeader>blogs created</UserTableHeader>
            </tr>
            {numberOfBlogs.map(user =>
              <User
                key={user.key}
                user={user}
              />
            )}
          </tbody>
        </UserTable>
      </UserTableBackground>
    </div>
  )
}

const User = ({ user }) => {
  const link = `/users/${user.id}`

  /*
  const LeftAlignCol = styled.td`
    text-align: left
  `
  */

  const CenterAlignCol = styled.td`
    text-align: center
  `

  return (
    <tr>
      <CenterAlignCol>
        <Link to={link}>
          {user.username}
        </Link>
      </CenterAlignCol>
      <CenterAlignCol>{user.blogs}</CenterAlignCol>
    </tr>
  )
}


export default Users