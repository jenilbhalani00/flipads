import React, { useContext } from 'react'
import { DataContext } from '../App'


const About = (props) => {
  const data = useContext(DataContext)

    // props.setname('parag')

  return (
    <div> 
            {
        data.map((item)=>{
          return(
            <h1>{item.roll}</h1>
          )
        })
      }
    </div>
  )
}

export default About
