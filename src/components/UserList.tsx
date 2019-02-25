import React, { Component } from 'react'
import { async } from 'q'

import Api from '../config/api'
import Button from './Button'
import history from '../config/history'

class UserList extends Component {
  state = { data: [] }
  componentDidMount = async () => {
    try {
      const res = await Api.get('users')
      this.setState({ data: res.data.slice(0, 5) })
    } catch (err) {
      console.log(err)
    }
  }

  showDetail = (item: any) => {
    history.push(`/users/${item.login}`)
  }

  render() {
    const { data } = this.state

    return (
      <div className="user_list">
        <h3>Top 5 Github Users</h3>
        <p>Tap a username to see more information</p>
        {data.map((user, idx) => (
          <Button
            key={idx}
            className="btn-primary m-2"
            text={user['login']}
            onClick={() => this.showDetail(user)}
          />
        ))}
      </div>
    )
  }
}

export default UserList
