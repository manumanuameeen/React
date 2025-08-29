import React, { useState } from 'react'
import CUM_child from './CUM_child';
const CUM_parent = () => {
    const [val, setVal] = useState(0);

    const handleVal = (val) => {
        setVal(val)
    }
    return (
        <div>
<CUM_child val={val} fn={handleVal} />
        </div>
    )
}

export default CUM_parent
