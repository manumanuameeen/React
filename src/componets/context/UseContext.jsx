import React, { useContext } from 'react'
import { TheameContext } from './childContext'

const UseContext = () => {

    const {theame,handleTheam} = useContext(TheameContext);

  return (
    <div>
    <h1>theame:{theame}</h1>  
    <button onClick={handleTheam}>click</button>
    </div>
  )
}

export default UseContext
