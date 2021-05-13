import blogService from '../services/blogs'
import { changeToneToPos } from '../reducers/toneReducer'
import { addNotification, dropNotification } from '../reducers/notificationReducer'

const blogReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_BLOG':
    return state.concat(action.newBlog)
  case 'REMOVE_BLOG':
    return state.filter(b => b.id !== action.id)
  case 'INCREASE_LIKES': {
    console.log('IN INCREASE LIKES')
    console.log(action.id)
    let blogToChange = state.find(b => b.id === action.id)
    blogToChange = { ...blogToChange, likes: blogToChange.likes + 1 }
    return state.map(b =>
      b.id !== action.id
        ? b
        : blogToChange
    )}
  case 'ADD_COMMENT': {
    let blogToChange = state.find(b => b.id === action.data.id)
    blogToChange = { ...blogToChange, comments: blogToChange.comments.concat(action.data.comment) }
    console.log(blogToChange)
    return state.map(b =>
      b.id !== action.data.id
        ? b
        : blogToChange
    )
  }
  case 'INIT_BLOGS':
    return action.data
  default:
    return state
  }
}

export const addBlog = (blogObject) => {
  return async dispatch => {
    const newBlog = await blogService.create(blogObject)
    dispatch(changeToneToPos())
    dispatch(addNotification(`A new blog "${newBlog.title}" added`))
    setTimeout(() => {
      dispatch(dropNotification())
    }, 5000)
    console.log('NEW BLOG IN REDU')
    console.log(newBlog)
    dispatch({
      type: 'ADD_BLOG',
      newBlog
    })
  }
}


export const initBlogs = () => {
  return async dispatch => {
    const data = await blogService.getAll()
    console.log('Palautuuko dataa??')
    console.log(data)
    dispatch({
      type: 'INIT_BLOGS',
      data
    })
  }
}

export const increaseLikes = (blogObject) => {
  return async dispatch => {
    //const changedBlog = await blogService.change(blogObject)
    await blogService.change(blogObject)
    const id = blogObject.id
    dispatch({
      type: 'INCREASE_LIKES',
      id
    })
  }
}

export const addComment = (comment, id) => {
  return async dispatch => {
    await blogService.addComment(comment, id)
    dispatch({
      type: 'ADD_COMMENT',
      data: {
        comment: comment,
        id: id
      }
    })
  }
}

export const removeBlog = (id) => {
  return async dispatch => {
    await blogService.remove(id)
    dispatch({
      type: 'REMOVE_BLOG',
      id
    })
  }
}



export default blogReducer