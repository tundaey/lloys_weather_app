import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {routes} from './config/routes'

require('./bulma.css')
require('./index.css')



ReactDOM.render(routes, document.getElementById('app'))