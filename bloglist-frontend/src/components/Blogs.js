//import React, { useState } from 'react'
import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
//import { changeBlog, removeBlog } from '../reducers/blogReducer'
import {
  Link
} from 'react-router-dom'
import styled from 'styled-components'


const Blog = ({ blog }) => {

  const BlogLi = styled.li`
  padding-top: 10px;
  padding-left: 2px;
  margin-bottom: 2px;
  list-style-type: upper-roman;
  color: 333333;
  `



  const link = `/blogs/${blog.id}`

  return (
    <BlogLi id='blog-info'>
      <Link to={link}>{blog.title}</Link>
    </BlogLi>
  )
}

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)

  const BlogUl = styled.ul`
    background: #f1fde7;
  `

  return (
    <div>
      <BlogUl>
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
      </BlogUl>
    </div>
  )
}

export default Blogs