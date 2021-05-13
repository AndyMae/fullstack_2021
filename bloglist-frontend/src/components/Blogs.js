//import React, { useState } from 'react'
import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//import { changeBlog, removeBlog } from '../reducers/blogReducer'
import {
  Link
} from 'react-router-dom'


const Blog = ({ blog }) => {
  /*
  const loggedUser = useSelector(state => state.user)
  const [visible, setVisible] = useState('')

  const showWhenVisible = { display: visible ? 'none' : '' }
  const hideWhenVisible = { display: visible ? '' : 'none' }

  const dispatch = useDispatch()

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const addLike = () => {
    const changedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    console.log(changedBlog)



    const changedBlog = {
      user: blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url,
    }


    dispatch(changeBlog(changedBlog))
  }

  const dropBlog = () => {
    window.confirm(`Remove blog "${blog.title}" by ${blog.author}?`)
      && dispatch(removeBlog(blog.id))
  }


  console.log('Käyttäjät BLOGissa')
  console.log(blog)
  console.log(blog.user)
  console.log(blog.user.username)
  console.log('LOGGED SER')
  console.log(loggedUser)

  let displayRemoveButton = ''
  if (loggedUser) {
    displayRemoveButton = blog.user.username === loggedUser.user ? '' : 'none'
  } else {
    displayRemoveButton = 'none'
  }

  const removeButtonStyle = {
    background: 'blue',
    color: 'white',
    display: displayRemoveButton
  }
  */
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }


  const link = `/blogs/${blog.id}`

  return (
    <li id='blog-info' style={blogStyle}>
      <Link to={link}>{blog.title}</Link>
    </li>
  )
}


const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  return (
    <div>
      <ul>
        {blogs
          .sort((a, b) => (
            b.likes - a.likes
          ))
          .map(blog =>
            <Blog
              key={blog.id}
              blog={blog}
            />
          )}
      </ul>
    </div>
  )
}

export default Blogs