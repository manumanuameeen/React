import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

const increse = ()=>{
    setCount(count+1)
}
const dencrese = ()=>{

    if(count>  0){

        setCount(count-1)
    }
}
const reset = ()=>{
    setCount(0)
}

    return (
  <div>
      <h1>count :{count}</h1>
      <button onClick={()=>{increse()}}>inc</button>
      <button onClick={()=>{dencrese()}}>dec</button>
      <button onClick={()=>{reset()}}>reset</button>
  </div>
  )
}

export default Counter
