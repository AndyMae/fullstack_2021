import { createStore, applyMiddleware, combineReducers  } from 'redux'
import notificationReducer from './reducers/notificationReducer'
import toneReducer from './reducers/toneReducer'
import loginReducer from './reducers/loginReducer'
import currentUserReducer from './reducers/currentUserReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import blogReducer from './reducers/blogReducer'

const reducer = combineReducers({
  notification: notificationReducer,
  tone: toneReducer,
  credentials: loginReducer,
  user: currentUserReducer,
  blogs: blogReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store

