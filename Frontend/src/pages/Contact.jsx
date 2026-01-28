import React,{useState} from 'react'
import Service from './Service';

const Contact = () => {
  const[name,setName]=useState("Rekha");
  const toggleName=()=>{
    setName(name==="Rekha"?"Mohan":"Rekha")
  }
  return(
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle </button>
  
    
    </div>
  )
}

export default Contact