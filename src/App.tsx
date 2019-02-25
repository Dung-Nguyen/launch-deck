import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'

import history from './config/history'
import MainPage from './page/MainPage'
import UserDetailPage from './page/DetailPage'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <>
          <Route exact path="/" component={MainPage} />
          <Route path="/users/:username" component={UserDetailPage} />
        </>
      </Router>
    )
  }
}

export default App
