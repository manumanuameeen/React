import React, { useState } from 'react'
import SBC1 from './SBC1'
import SBC2 from './SBC2'
const SB_PARENT = () => {

  const [value, setValue] = useState("")

  return (
    <div>
      <SBC1 setValue={setValue} />
      <SBC2 value={value} />
    </div>
  )
}

export default SB_PARENT
