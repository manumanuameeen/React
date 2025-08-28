import React, { useMemo, useState } from 'react'

const UseMemo = () => {
const [val,setVal] = useState(0);
const [boolean,setTrue] = useState(0);
// const [expensiveCount,setExpensive] = useState(0)
    const expensive=useMemo( (val)=>{
        console.log("insidethe expensive");
        
        let  sum = 0 ;
        for(let i =val; i <1e8;i++){
            sum+=i;
        }
        return sum;
    },[val]);


console.log("parent");
  return (
    <div>
      <button onClick={()=>setVal(prev=>prev+1)}>change val</button>
      <button onClick={()=>setTrue(!boolean)}>demo</button>
     <h1> exValue {expensive}</h1>
    </div>
  )
}

export default UseMemo
