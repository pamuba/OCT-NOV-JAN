import React, { Component } from 'react'

export class UserGreetings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }

render(){
    // Short Circuit Operator
   return this.state.isLoggedIn && <div>Welcome John</div>
}

// render(){
//     return(
//         this.state.isLoggedIn ? 
//         (
//             <div>Welcome John</div>
//             //more tags
//         ) : 
//         <div>Welcome Guest</div>
//     )
// }

// render(){
//     let message 
//     if(this.state.isLoggedIn){
//         message = <div>Welcome John</div>
//     }
//     else{
//         message = <div>Welcome Guest</div>
//     }

//     return <>{message}</>
// }
//   render() {
//     if(this.state.isLoggedIn){
//         return(<div>Welcome John</div>)
//     }
//     else{
//         return (<div>Welcome Guest</div>)
//     }
   
//   }
}

export default UserGreetings