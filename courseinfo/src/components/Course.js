import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'


const Course = ({courses}) => {
        return (
            <div>
                {
                courses.map( (value) => 
                         { 
                             return (
                                <Header key= {value.id} course={value.name}/>,
                                <Content  key= {value.id} parts= {value.parts}/>,
                                <Total key= {value.id} parts= {value.parts}/> 
                                )
                         }
                         )
                        }
            </div>
        )
}
export default Course