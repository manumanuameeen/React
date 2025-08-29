import React from 'react'

const CUM_child = ({val,fn}) => {
  return (
    <div>
      <input type="text" onChange={(e)=>fn(e.target.value)} />
      <h1>val :{val}</h1>
    </div>
  )
}

export default CUM_child
