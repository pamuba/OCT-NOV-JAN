import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increment(){
//    this.setState({
//     count : this.state.count + 1
//    }, ()=>{
//     // console.log("Callback Value:",this.state.count)
//    })

//    console.log(this.state.count)

    this.setState(prevState=>({
        count : prevState.count + 1
    }))
    
  }

  incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
  }

  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={()=>this.increment()}>Increment 1</button>
        <button onClick={()=>this.incrementFive()}>Increment 5</button>
      </>
    )
  }
}

export default Counter