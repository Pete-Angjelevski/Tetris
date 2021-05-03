import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './store'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store ={store}>
      <Router >
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
