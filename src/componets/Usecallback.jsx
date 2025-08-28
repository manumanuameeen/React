import React, { use, useCallback, useState } from 'react'

const Child = React.memo(({ onClick, count, ...prop }) => {

    console.log("inside the child reached");;
    return <>

        <button onClick={onClick}>Click child</button>
        <h1>count:{count}</h1>

    </>
})


const Usecallback = () => {
    const [count, setCount] = useState(0);
    const [count2,setCount2] = useState(0);

    console.log("inside parent");
    const handleCLick = useCallback(() => {
        console.log("inside handleclikc");


    }, [count]);

    const demo =()=>{
        console.log('advadvadsv')
        setCount2(prev=>prev+1)
    }

    return (
        <div>
            <Child onClick={handleCLick} count={count} />
            <button onClick={() => setCount(prev => prev + 1)}>inc</button>
            <button onClick={demo}>demo</button>
        </div>
    )
}

export default Usecallback
