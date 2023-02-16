import React, { Component } from 'react'

export class NameList extends Component {
 
  render() {
    const persons = [
        {
            id:1,
            name:'John',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Jill',
            age:23,
            skill:'Angular'
        },
    ]
    const personList = persons.map(person => (
        <h2 key={person.id}>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
    ))
    return (
      <div>{personList}</div>
    )
  }
}

export default NameList