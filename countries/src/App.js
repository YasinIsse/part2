import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import Countries from "./components/Countries"

import axios from 'axios'

const App = () => {
  const [ country, setCountry] = useState([  {name: "Canada", capital:"Ottawa", population: "35,000,000"},
                                            {name: "Somalia", capital:"Mogadishu", population: "25,000,000"}
]) 
  const [ newFilter, setNewFilter ] = useState('')

  // const hook = (newFilter) => {
  //   console.log('Hook effect')
  //   axios
  //   .get('https://restcountries.eu/rest/v2/name/'+newFilter)
  //   .then(response =>{
  //     console.log('Fullfilled promise')
  //     console.log(response.data)
  //     setCountry(response.data)
  //   } )
  // }
  // useEffect(hook, [])
  // console.log('render', country.length, 'country')

  const handleFilterChange = (event) =>{
    setNewFilter(event.target.value)
    console.log(newFilter)
    console.log(country)
    }


  return (
       <div>
      <Filter value={newFilter} onChange={handleFilterChange}/>
      <h2>Countries</h2>
      <Countries country={country} filter={newFilter} />
    </div> 
  )
}

export default App