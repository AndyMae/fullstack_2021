
const notificationReducer = (state = '', action) => {
  console.log('the notification state is:')
  console.log(state)
  console.log(action.notification)
  switch(action.type) {
  case 'ADD_NOTIFICATION':
    return action.notification
  case 'DROP_NOTIFICATION':
    return ''
  default:
    return state
  }
}

export const addNotification = (notification) => {
  console.log('notification to be added')
  console.log(notification)
  return async dispatch => {
    dispatch({
      type: 'ADD_NOTIFICATION',
      notification: notification
    })
  }
}

export const dropNotification = () => {
  return async dispatch => {
    dispatch({
      type: 'DROP_NOTIFICATION'
    })
  }
}

export default notificationReducer