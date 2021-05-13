import loginService from '../services/login'
import blogService from '../services/blogs'

const currentUserReducer = (state = null, action) => {
  switch(action.type) {
  case 'ADD_USER':
    return action.user
  case 'ADD_LOGGED_USER':
    return action.user
  case 'REMOVE_USER':
    return null
  default:
    return state
  }
}

export const loginUser = (credentials) => {
  return async dispatch => {
    const user = await loginService.login(credentials)
    console.log('UUUUSERI')
    console.log(user)

    window.localStorage.setItem(
      'loggedBlogAppUser',
      JSON.stringify(user)
    )

    blogService.setToken(user.token)
    console.log('tokenin asetus onnistuu')
    console.log('kaikki onnistuu')
    dispatch({
      type: 'ADD_USER',
      user
    })
  }
}

export const addLoggedUser = (user) => {
  return {
    type: 'ADD_LOGGED_USER',
    user
  }
}

export const removeLoggedUser = () => {
  return {
    type: 'REMOVE_USER'
  }
}

export default currentUserReducer