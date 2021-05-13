import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeLoggedUser } from '../reducers/currentUserReducer'


const NavigationMenu = () => {
  const loggedInUser = useSelector(state => state.user)
  const dispatch = useDispatch()
  const naviMenuStyle = {
    background: 'lightgray',
    padding: 10
  }

  const handleLogOut = (event) => {
    event.preventDefault()
    window.localStorage.removeItem('loggedBlogAppUser')
    dispatch(removeLoggedUser())
  }

  if (!loggedInUser) {
    return null
  }
  return (
    <div style={naviMenuStyle}>
      <span><Link to={'/'}>blogs</Link> </span>
      <span><Link to={'/users'}>users</Link> </span>
      <span>{loggedInUser.name} logged in </span>
      <button onClick={handleLogOut}>log out</button>
    </div>
  )
}

export default NavigationMenu