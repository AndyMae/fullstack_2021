import React, { useState } from 'react'
import { addBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'


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

  const StyledInput = styled.input`
    border: 1px solid #9BF057;
    border-radius: 5px;
    margin: 2px 0;
    display: block;
  `

  const StyledButton = styled.button`
  background-color: #6057f0;
  color: white;
  border-radius: 5px;
  `

  const StyledH3 = styled.h3`
    color: #333333
  `

  return (
    <div>
      <StyledH3>create new</StyledH3>
      <form onSubmit={createBlog} id='createBlogForm'>
        <div>
          title
          <StyledInput
            id="title"
            value={title}
            name="title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <StyledInput
            id="author"
            value={author}
            name="author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url
          <StyledInput
            id="url"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <StyledButton id='create-button' type="submit">create</StyledButton>
      </form>
    </div>
  )
}

export default CreateBlogForm