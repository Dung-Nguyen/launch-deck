import React, { Component } from 'react'

import Header from '../components/Header'
import UserList from '../components/UserList'

class MainPage extends Component {
  render() {
    return (
      <>
        <Header title="Home" hasBack={false} onClick="" />
        <div className="container">
          <UserList />
        </div>
      </>
    )
  }
}

export default MainPage
