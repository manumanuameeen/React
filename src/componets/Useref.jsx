
import React, { useState, useRef } from 'react'

const Useref = () => {

    const inputRef = useRef(null)
    const [value, setVal] = useState("")

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <input type="text" placeholder="type something" ref={inputRef}  onChange={(e) => {
                setVal(e.target.value)
            }}/>
            <button onClick={handleFocus}>click to get focus</button>

            <h1>count :{value}</h1>
        </div>
    )
}

export default Useref
