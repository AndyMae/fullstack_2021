import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

const UserInfo = () => {

  const match = useRouteMatch('/users/:id')
  console.log('match')
  console.log(match)

  const blogsOfUser = useSelector(state => {
    const toReturn = match
      ? state.blogs.filter(b => {
        console.log('BLOGI FILTERISSÃ„')
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
        console.log('BLOGI FILTERISSÃ„')
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

  const BlogUl = styled.ul`
    background: #f1fde7;
  `

  const StyledH2 = styled.h2`
    font-style: italic;
  `

  return (
    <div>
      <h1>{username}</h1>
      {blogsOfUser !== null
        ? <div>
          <StyledH2>added blogs</StyledH2>
          <BlogUl>
            {blogsOfUser.map(b =>
              <Blog
                key={b.id}
                blog={b}
              />
            )}
          </BlogUl>
        </div>
        : <span>No blogs added yet</span>
      }
    </div>
  )
}

const Blog = ({ blog }) => {
  const BlogLi = styled.li`
    padding-top: 10px;
    padding-left: 2px;
    margin-bottom: 2px;
    list-style-type: upper-roman;
    color: 333333;
  `

  return (
    <BlogLi>{blog.title}</BlogLi>
  )
}


export default UserInfo