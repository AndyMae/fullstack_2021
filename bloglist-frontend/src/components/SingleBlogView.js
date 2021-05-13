import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addComment, increaseLikes } from '../reducers/blogReducer'


const SingleBlogView = () => {
  const dispatch = useDispatch()
  const match = useRouteMatch('/blogs/:id')

  const blog = useSelector(state =>
    state.blogs.find(b => {
      return (
        b.id === match.params.id
      )
    })
  )

  console.log(blog)

  const addLike = () => {
    const changedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    console.log(changedBlog)
    /*
    const changedBlog = {
      user: blog.user.id,
      likes: blog.likes + 1,
      author: blog.author,
      title: blog.title,
      url: blog.url,
    }
    */

    dispatch(increaseLikes(changedBlog))
  }

  if (!blog) {
    return null
  }
  return (
    <div>
      <h2>{blog.title}</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to={blog.url}>{blog.url}</Link>
            </td>
          </tr>
          <tr>
            <td>
              likes {blog.likes} <button id='like-button' onClick={addLike}>like</button>
            </td>
          </tr>
          <tr>
            <td>
              added by {blog.user.username}
            </td>
          </tr>
        </tbody>
      </table>
      <Comments
        blog={blog}
      />
    </div>
  )
}

const Comments = ({ blog }) => {
  const genKey = () => Math.floor(Math.random() * 10000000000000 + 1)

  const dispatch = useDispatch()

  const publishComment = (event) => {
    event.preventDefault()
    const content = event.target.comment.value
    event.target.comment.value = ''
    dispatch(addComment(content, blog.id))
  }

  return (
    <div>
      <h2>comments</h2>
      <form onSubmit={publishComment}>
        <input name="comment" />
        <button type="submit">add comment</button>
      </form>
      <ul>
        {blog.comments.map(c =>
          <li key={genKey()}>
            {c}
          </li>
        )}
      </ul>
    </div>
  )
}

export default SingleBlogView