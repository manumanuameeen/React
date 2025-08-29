import React, { useId } from 'react'

const SBC2 = ({value}) => {
    const id = useId()
    const id2 = useId()
    const id3 = useId()
  return (
    <div>
      <h1>val:{value}</h1>
      <h1>id:{id}</h1>
      <h1>id:{id2}</h1>
      <h1>id:{id3}</h1>
    </div>
  )
}

export default SBC2
