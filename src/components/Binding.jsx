import React, { Component } from 'react'

export class Binding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message:"Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    this.setState({
        message:"Good Bye"
    })
    console.log(this)
  }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler}>CLICK</button>
      </div>
    )
  }
}

export default Binding