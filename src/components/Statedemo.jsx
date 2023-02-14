import React, { Component } from 'react'

export class Statedemo extends Component {
  constructor(){
    super()
    this.state = {
        message: "Welcome Guest"
    }
  } 
  changeMessage(){
    this.setState({
        message: "Hello John"
    })
  }
  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <p><button onClick={()=>this.changeMessage()}>CLICK</button></p>
      </>
    )
  }
}

export default Statedemo