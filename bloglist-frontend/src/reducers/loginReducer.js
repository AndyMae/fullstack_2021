const loginReducer = (state={}, action) => {
  switch(action.type) {
  case 'ADD_PASSWORD':
    return  { ...state, password: action.password }
  case 'ADD_USERNAME':
    return { ...state, username: action.username }
  case 'RESET_CREDENTIALS':
    return {
      username: '',
      password: ''
    }
  default:
    return state
  }
}

export const addPassword = (password) => {
  return ({
    type: 'ADD_PASSWORD',
    password
  })
}

export const addUsername = (username) => {
  return ({
    type: 'ADD_USERNAME',
    username
  })
}

export const resetCredentials = () => {
  return {
    type: 'RESET_CREDENTIALS'
  }
}

export default loginReducer