import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "./Slice"
const Store =configureStore({
    reducer:{
        counter:counterSlice
    }
})

export default Store