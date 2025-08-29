import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()
  return (
    <div>
      <h1>home</h1>
      <button onClick={()=>navigate("/about",{replace:true})}>go to about</button>
    </div>
  )
}

export default Home
