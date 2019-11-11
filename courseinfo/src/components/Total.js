import React from 'react'


  const Total = ({parts}) => {
    let sum = parts.reduce( (acc,val) => acc + val.exercises, 0 )
    return (     
        <p><b>total of {sum} exercises</b></p>
    )
  }

  export default Total