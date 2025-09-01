
import React, { useReducer } from 'react'

const UseReducer = () => {

let initialvalue ={
    count:0
}

function reducer(state,action){
    switch (action.type){
        case "INC":{
            return {count:state.count +1}
        }
        case "DEC":{
            if(state.count>0){

                return {count : state.count -1} 
            }
        }
        case "RES":{
            return initialvalue
        }
        default :return state
    }
}

const [count,dispatch] =useReducer(reducer,initialvalue)

  return (
    <div>
      
<h1>count :{count.count}</h1> 
<button onClick={()=>dispatch({type:"INC"})}>inc</button>
<button onClick={()=>dispatch({type:"DEC"})}>dec</button>
<button onClick={()=>dispatch({type:"RES"})}>reset</button>


    </div>
  )
}

export default UseReducer
