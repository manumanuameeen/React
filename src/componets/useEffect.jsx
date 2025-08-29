import React, { useState,useEffect } from 'react'

const UseEffect = () => {
const [count,setCount] = useState(0)

    useEffect(()=>{

        console.log(`comount mounted ${count}`);
        
        return(()=>{
            console.log(`conponetd unmount ${count}`)
        })

    },[count])
    
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <h1>count:{count}</h1>
    </div>
  )
}

export default UseEffect
