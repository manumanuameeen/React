import React, { useState } from 'react'
import CHILD from './CHILD'
const PARENT = () => {
    const [count, setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count+ 1);
    }
  return (
    <div style={{width:120, height:120, backgroundColor:"green"}}>
      <CHILD  inc={handleCount}/>
      COUNT:{count}
    </div>
  )
}

export default PARENT
