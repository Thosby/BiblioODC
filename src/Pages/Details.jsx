import {useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom'

const Details = () => {
   

    const location = useLocation();
    const data = location.state;

    
  return (
    <div>
    <h1>{data.id}</h1>
    <h2>{data.description}</h2>
    <img src={data.downloadURL} alt="" />
    </div>
  )
}

export default Details
