import React from 'react'
import useFocus from './CoustomHook'
const Cparent = () => {
    const inputRef = useFocus();

  return (
    <div>
      <input type="text" name="" id="" ref={inputRef}/>
    </div>
  )
}

export default Cparent
