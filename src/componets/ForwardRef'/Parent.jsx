import React from 'react'
import Child from './Child'
import { useRef } from 'react'


const Parent = () => {

    let inputRef = useRef(null)

    function hanldeFocus(){
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>forward ref</h1>
      <Child ref={inputRef} />
      <button onClick={hanldeFocus}>Focus</button>
    </div>
  )
}

export default Parent
