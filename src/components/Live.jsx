import React from 'react'
import LinkData from './LinkData'
import { useNavigate } from 'react-router-dom'
LinkData


const Live = () => {
  let navigate=useNavigate()
  let AboutPage=()=>{
    navigate('/About')
    

  }
  return (
    <div>Live
     <button onClick={()=>{AboutPage()}}>back on About-page</button>
     <button onClick={()=>navigate(-1)}>go back</button>
    </div>
  )
}

export default Live