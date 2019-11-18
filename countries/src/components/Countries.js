import React, { useState, useEffect } from 'react'
import Country from './Country'

const Countries = (props) => {

     const hook = (newFilter) => {
    console.log('Hook effect')
    axios
    .get('https://restcountries.eu/rest/v2/name/'+newFilter)
    .then(response =>{
      console.log('Fullfilled promise')
      console.log(response.data)
      response.data.map(country => setCountry(country.name))
    } )
  }
  useEffect(hook, [])

    const countriesToShow = (props.filter.length <= 0)
    ? props.country
    : props.country.filter(place => place.name.toLowerCase().includes(props.filter.toLowerCase()))

    const rows = () =>
        countriesToShow.map(place =>
        <Country name={place.name} capital={place.capital} population={place.population} />)
  
    return (rows())
  }
  
  export default Countries