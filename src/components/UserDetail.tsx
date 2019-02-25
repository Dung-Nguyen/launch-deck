import React, { Component } from 'react'
import Header from './Header'
import history from '../config/history'

class UserDetail extends Component<{ data: any }> {
  componentDidMount = () => {}
  render() {
    const { data } = this.props

    return (
      <>
        <Header
          title="Person"
          hasBack={true}
          onClick={() => history.goBack()}
        />
        <ul className="user_detail">
          <li>
            <img className="avatar" src={data.avatar_url} />
            <div className="content ml-4 pb-3">
              <p className="title">{data.login}</p>
              <p className="sub_title">{data.type}</p>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default UserDetail
