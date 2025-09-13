import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [isRuning, setRuning] = useState(false);
    const [count, setCount] = useState(0)


    useEffect(() => {
        let interval;
        if (isRuning) {
            console.log("acivated");
            
            interval = setInterval(() => {
                setCount(prev => prev + 1)
            }, 1000)

        }
        return (() => {
            console.log("cleared")
            clearInterval(interval)
        })

    }, [isRuning])


    const start = ()=>setRuning(true)
    const stop = ()=>setRuning(false)
    const reset = ()=>{
        setCount(0)
        setRuning(false)
    }
    return (
        <div>
            <h1>timer: {count}</h1>
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default Timer
