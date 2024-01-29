import React from 'react'
import LinkData from './LinkData'
import { useNavigate } from 'react-router-dom'
LinkData

const About = () => {
  let navigate=useNavigate();
  let homepage=()=>{
    navigate('/')
   
  }
  return (
    <div>About
     <button onClick={()=>homepage()}>go to home page</button>
    </div>
  )
}

export default About