import React, { Component } from 'react'

class Button extends Component<{
  text: string
  onClick: any
  className: string
}> {
  render() {
    const { text, onClick, className } = this.props
    return (
      <button onClick={onClick} className={`btn ${className}`}>
        {text}
      </button>
    )
  }
}

export default Button
