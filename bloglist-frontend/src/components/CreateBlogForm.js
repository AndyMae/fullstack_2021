import React, { useState } from 'react'
import { addBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'


const CreateBlogForm = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const createBlog = async (event) => {
    //blogFormRef.current.toggleVisibility()
    event.preventDefault()

    const blogObject = {
      title: title,
      author: author,
      url: url,
    }

    setTitle('')
    setAuthor('')
    setUrl('')

    console.log('LISÄTTÄVÄ BLOGI')
    console.log(blogObject)
    dispatch(addBlog(blogObject))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createBlog} id='createBlogForm'>
        <div>
          title
          <input
            id="title"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            id="author"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url
          <input
            id="url"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button id='create-button' type="submit">create</button>
      </form>
    </div>
  )
}

export default CreateBlogForm