import React, { Component } from 'react'

class Header extends Component<{
  title: string
  hasBack: boolean
  onClick: any
}> {
  render() {
    const { title, hasBack, onClick } = this.props
    return (
      <div className="header">
        {hasBack ? (
          <button className="btn-back" onClick={onClick}>
            {' '}
            Back
          </button>
        ) : null}

        <p className="title">{title}</p>
      </div>
    )
  }
}

export default Header
