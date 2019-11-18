import React from 'react'

const Country = (props) => {
  return (
    <div> {props.name}:  Capital: {props.capital} Pop: {props.population} </div>
  )
}

export default Country