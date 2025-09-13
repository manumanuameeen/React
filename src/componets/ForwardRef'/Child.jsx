import React, { forwardRef, useState } from 'react'
//set the ref after the properties;
const Child = forwardRef ((prop,ref) => {
    const [val,setval] = useState("")
  return (
    <div>
    <input type="text" ref={ref} onChange={(e)=>setval(e.target.value)}/>
<h1>{val}</h1>
    </div>
  )
})

export default Child
