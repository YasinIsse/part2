import React from 'react'
import Person from './Person'

const Persons = (props) => {
    const personsToShow = (props.filter.length <= 0)
    ? props.persons
    : props.persons.filter(person => person.name.toLowerCase().includes(props.filter.toLowerCase()))

    const rows = () =>
        personsToShow.map(person =>
        <Person key={person.name} name={person.name} number={person.number} />)
  
    return (rows())
  }
  
  export default Persons