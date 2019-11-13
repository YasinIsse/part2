import React, { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
 


  const addPerson = (event) =>{
    event.preventsDefault()
    const personObject = {
      name: newName,
    }
    console.log(persons)
    setPersons(persons.concat(personObject))
    // setNewName('')
  }

  const rows = () => persons.map(person =>
    <Person
      key={person.name}
      name={person.name}
    />
  )
  
  const handleNameChange = (event) =>{
  setNewName(event.target.value)
  console.log(persons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {rows()}
    </div>
    
  )
}

export default App