import React, { useState } from 'react'

function higherOrder(Small) {
  return function ({ name ,loading}) {
    if (loading) {
      return <h1>Loading....</h1>
    }
    return <Small name={name} />
  }
}

function Small({ name }) {
  return <h1> name : {name}</h1>
}
const Enhanced = higherOrder(Small)
const HigherOrder = () => {
  const [loading, setLoading] = useState(false)
  return <div>
<Enhanced  name={"ameen"} loading={loading} />
<button onClick={()=>setLoading(!loading)}>toggle</button>
  </div>


}

export default HigherOrder
