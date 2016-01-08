import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import ReactDOM from 'react-dom'
import React from 'react'

import configure from './store'

import Home from './containers/Home'
import Product from './containers/Product'
import Category from './containers/Category'

const store = configure()
const history = createHistory()

syncReduxAndRouter(history, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Home}></Route>
      <Route path="/category/:slug" component={Category}></Route>
      <Route path="/product/:slug" component={Product}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)