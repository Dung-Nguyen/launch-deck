import React, { Component } from 'react'
import history from '../config/history'
import Api from '../config/api'
import { async } from 'q'
import UserDetail from '../components/UserDetail'

class UserDetailPage extends Component {
  state = {
    user: {}
  }
  componentDidMount = async () => {
    const { pathname } = history.location
    const username = pathname.split('/')[2]
    try {
      const res = await Api.get(`users/${username}`)
      this.setState({ user: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div>
        <UserDetail data={user} />
      </div>
    )
  }
}

export default UserDetailPage
