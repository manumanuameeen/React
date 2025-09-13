import React from 'react'
import Child from './Child'
import { useRef } from 'react'


const Parent = () => {
let inputRef = useRef("")

const handleFocus =()=>{
  inputRef.current.focus();
}
  return (
    <div>
     <Child ref={inputRef} />
     <button onClick={handleFocus}>get focus</button>
    </div>
  )
}

export default Parent
