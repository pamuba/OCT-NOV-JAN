import React from 'react'

function Greet(props) {
  return (
    <>
        <div>Hello {props.name} aka {props.heroName}</div>
        <div>{props.children}</div>
    </>
  )
}

export default Greet