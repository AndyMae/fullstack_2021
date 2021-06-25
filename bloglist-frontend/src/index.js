import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

const GlobalSyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.50s linear;
    height: '100vh';
    min-height : '100vh';
    background: #faf7fe;
    background-size: cover;
  }
  `


ReactDOM
  .render(
    <Provider store={store}>
      <Router>
        <GlobalSyle />
        <App />
      </Router>
    </Provider>
    ,document.getElementById('root')
  )