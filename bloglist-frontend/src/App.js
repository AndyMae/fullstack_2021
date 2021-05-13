import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initBlogs } from './reducers/blogReducer'
import { addLoggedUser } from './reducers/currentUserReducer'
import Blogs from './components/Blogs'
//import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import CreateBlogForm from './components/CreateBlogForm'
import Users from './components/Users'
import UserInfo from './components/UserInfo'
import SingleBlogView from './components/SingleBlogView'
import NavigationMenu from './components/NavigationMenu'

import blogService from './services/blogs'
import Togglable from './components/Togglable'

import {
  Switch, Route
} from 'react-router-dom'


const App = () => {
  //const [user, setUser] = useState(null)

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    console.log('Initializing blogs!')
    dispatch(initBlogs())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    //const user = useSelector(state => state.user)
    console.log('tulostuuko tämä??')
    console.log(loggedUserJSON)
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      console.log('tämä tulostuu')
      console.log(user)
      dispatch(addLoggedUser(user))
      blogService.setToken(user.token)
    }
  }, [dispatch])

  const loginForm = () => (
    <Togglable buttonLabel='Login'>
      <LoginForm />
    </Togglable>
  )

  const blogFormRef = useRef()

  const createBlogForm = () => (
    <Togglable buttonLabel='New blog' ref={blogFormRef}>
      <CreateBlogForm/>
    </Togglable>
  )


  return (
    <div className="container">
      <NavigationMenu />
      <h1>BlogApp</h1>
      <Notification />
      {user === null
        ? loginForm()
        : <div>
          <Switch>
            <Route path="/users/:id">
              <UserInfo />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/blogs">
              <SingleBlogView />
            </Route>
            <Route path="/">
              <h2>blogs</h2>
              {createBlogForm()}
              <Blogs />
            </Route>
          </Switch>
        </div>
      }
    </div>
  )
}

export default App