import React, { useState } from 'react'
//import { addUsername, addPassword, resetCredentials } from '../reducers/loginReducer'
import { changeToneToNeg } from '../reducers/toneReducer'
import { addNotification, dropNotification } from '../reducers/notificationReducer'
import { loginUser } from '../reducers/currentUserReducer'
import { useDispatch } from 'react-redux'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log(`logging in with ${username} ${password}`)
    try {
      dispatch(loginUser({ username, password }))
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log(exception)
      console.log('missing or invalid credentials')
      dispatch(changeToneToNeg())
      dispatch(addNotification('missing or invalid credentials'))
      setTimeout(()  => {
        dispatch(dropNotification(''))
      }, 5000)
    }
  }

  return (
    <div>
      <h2>Login to application</h2>
      <form id={'login-form'} onSubmit={handleLogin}>
        <div>
          username
          <input
            id='username'
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            id='password'
            type="password"
            value={password}
            name="Username"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm