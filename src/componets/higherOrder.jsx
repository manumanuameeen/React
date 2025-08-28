import React, { useState } from 'react'

function withLoader(Wrapper){
    return function enhanced({isLoading,...prop}){
        if(isLoading){
            return  <h2>Loading...</h2>
        }
        return <Wrapper {...prop} />
    }
}

function wraper({name}){
    return <h1>name:{name}</h1>
}

const EnhancedFun = withLoader(wraper)


const HigherOrder = () => {
    const [s,setS] = useState(false);
  return (
    <div>
<button onClick={()=>{setS(prev=>!prev)}}>show</button>
      <EnhancedFun isLoading={s} name={"moosa learnd"}/>
    </div>
  )
}

export default HigherOrder
