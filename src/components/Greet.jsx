import React from 'react'

function Greet(props) {
  return (
    <div>
        <div>Hello {props.name} aka {props.heroName}</div>
        <div>{props.children}</div>
    </div>
  )
}

export default Greet