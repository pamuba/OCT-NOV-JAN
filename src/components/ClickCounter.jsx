import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {

  render() {
    const {name, count, incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>{name} CLICKED {count} TIMES</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)