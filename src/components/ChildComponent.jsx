import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.greetHandler}>Greet Parent</button>
      </>
    )
  }
}

export default ChildComponent