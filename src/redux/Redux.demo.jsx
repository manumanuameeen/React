import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset} from './Slice';
const Redux_demo = () => {

const count = useSelector(state=>state.counter.value);

const dispatch = useDispatch();

  return (
    <div>
      count:{count}
      <button onClick={()=>dispatch(increment())}>inc</button>
      <button onClick={()=>dispatch(decrement())}>dec</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  )
}

export default Redux_demo
