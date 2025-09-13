// import React, { Suspense } from 'react'
// import HigherOrder from './componets/higherOrder'
// import UseEffect from './componets/useEffect'
// import Counter from './componets/counter'
import Timer from './componets/Timer'
// import Usecallback from './componets/Usecallback'
// import UseMemo from './componets/UseMemo'
// import UseReducer from './componets/UseReducer'
// import Useref from './componets/Useref'
// import UseContext from './componets/context/UseContext'
// import ChildContext from './componets/context/childContext'
// import Parent from './componets/ForwardRef\'/Parent'
// import Cparent from './componets/coustom/Cparent'
// import CUM_parent from './componets/Communication/p-to-child.jsx/CUM_parent'
// import PARENT from './componets/Communication/child - parent/PARENT'
// import SB_PARENT from './componets/Communication/SIBLINGS/SB_PARENT'
// import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
// import Home from './componets/navigate/Home'
// import About from './componets/navigate/About'
// import Contact from './componets/navigate/Contact'
// const LazyCom = React.lazy(()=>import("./componets/lazy.loading/LazyParent"));
// import Store from './redux/store'
// import { Provider } from 'react-redux'
// import Redux_demo from './redux/Redux.demo'
// import Parent from './Parent'
import { useDispatch, useSelector } from "react-redux"

import { useState } from "react";
import { addTodo,removeTodo } from "../redux/slice";
const App = () => {
// const todos = useSelector(state=>state.todos);
// const dispatch = useDispatch();
// const [text,setText] = useState("")
// const handleADD =()=>{
//   if(text.trim()){
//     dispatch(addTodo(text));
//   }
//   setText("");
// }


  return (
    <div>
      
{/* --------------------------------------------- */}
{/*redux example todo*/}
{/* <h1>TO-DO DAILY</h1>

  <input type="text" value={text} 
onChange={(e)=>setText(e.target.value)}
placeholder="Enter Task"
onKeyDown={(e)=>{
  if(e.key === "Enter"){
    handleADD()
  }
}}
/>
<button onClick={handleADD}>ADD</button>


<ul>
  {todos.map(item=>(
    <li key={item.id}>
      {item.text}
      <button onClick={()=>dispatch(removeTodo(item.id))}>Delete!!</button>
    </li>
  ))}
</ul> */}
{/* <HigherOrder/> */}
{/* <UseEffect /> */}
{/* <Counter/> */}
<Timer  />
{/* <Usecallback/> */}{/*   in this already used the react memo*/ }
{/* <UseMemo/> */}
{/* <UseReducer/> */}
{/* <Useref/> */}
{/* <ChildContext>
  <UseContext/>
</ChildContext> */}
{/* <Parent/> */}
{/* <Cparent/> */}
{/* <CUM_parent/> */}
{/* <PARENT/> */}
{/* <SB_PARENT/> */}

{/* 
<BrowserRouter>
<nav>
  <Link to={"/about"}>About</Link>
  <Link to={"/"}>home</Link>
  <Link to={"/contact"}>contact</Link>
  <Link to={"/lazy"}>lazy</Link>
</nav>
<Suspense fallback={<h1>Loading....</h1>} >
   
<Routes>
  <Route path='/'element={<Home/>}/>
  <Route path='/about'element={<About/>}/>
  <Route path='/contact'element={<Contact/>}/>
  <Route path='/lazy' element={<LazyCom />}/>
</Routes>
</Suspense>

</BrowserRouter> */}
{/* <Provider store={Store}>

<Redux_demo/>

</Provider> */}
{/* <Parent/> */}
    </div>
  )
}

export default App
