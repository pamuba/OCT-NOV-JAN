import React, { Component } from 'react'

export class RefsDemo extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  componentDidMount(){
    this.inputRef.current.focus()
  }
  render() {
    return (
      <div>
        <p><input type="text"/></p>
        <input type="text" ref={this.inputRef} />
      </div>
    )
  }
}

export default RefsDemo