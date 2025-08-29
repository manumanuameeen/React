import React from 'react'

const CHILD = ({inc}) => {

  return (
    <div style={{backgroundColor:"black", width:"100px", height:"20%"} }>
        
      <button onClick={inc}> inc</button>
    </div>
  )
}

export default CHILD
