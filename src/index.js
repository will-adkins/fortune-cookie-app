import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Component from './component.js'
import App from './app.js'

const state = { fortune: null }

ReactDOM.render(
  <Component initialState={state}>{App}</Component>,
  document.getElementById('app')
)
