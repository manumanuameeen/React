import React, { createContext, useState } from 'react'

export const TheameContext = createContext()

const ChildContext = ({children}) => {

    const [theame,setTheam] = useState("light");

    const handleTheam =()=>{
        setTheam( prev=>prev === "light"?"dark":"light");
    }

  return (

      <TheameContext.Provider value={{theame,handleTheam}}>
       {children}
      </TheameContext.Provider>
   
  )
}

export default ChildContext
