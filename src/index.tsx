import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bootswatch/dist/materia/bootstrap.min.css'

import { Provider } from 'react-redux'
import store from './redux/store'

// For dev environment

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
