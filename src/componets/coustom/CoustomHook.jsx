import React, { useEffect } from 'react'
import { useRef } from 'react';



function useFocus(){
  const ref = useRef()

  useEffect(()=>{
  if(ref.current){
      ref.current.focus();
  }
  },[])
  return ref
}

export default useFocus
