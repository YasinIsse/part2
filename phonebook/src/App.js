import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const hook = () => {
    console.log('Hook effect')
    axios
    .get('http://localhost:3001/persons')
    .then(response =>{
      console.log('Fullfilled promise')
      console.log(response.data)
      setPersons(response.data)
    } )
  }
  useEffect(hook, [])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) =>{
    event.preventDefault()
    const personObject = {
                            name: newName,
                            number: newNumber
                         }
    const nameExists = (name) =>{
      let value = persons.filter(person => person.name.toLowerCase() ===newName.toLowerCase())
      return (value.length > 0)
    }
  
    if (nameExists(newName)) 
    {window.alert(`${newName} already exists in the Phonebook.`)}
    else 
    {setPersons(persons.concat(personObject))}
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
    }
  
  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm 
      onSubmit={addPerson} newName={newName} 
      newNumber={newNumber}onChangeNumber={handleNumberChange}
      onChangeName= {handleNameChange} />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={newFilter} />
    </div> 
  )
}

export default App