import React, { Suspense } from 'react'
import HigherOrder from './componets/higherOrder'
import UseEffect from './componets/useEffect'
import Counter from './componets/counter'
import Timer from './componets/Timer'
import Usecallback from './componets/Usecallback'
import UseMemo from './componets/UseMemo'
import UseReducer from './componets/UseReducer'
import Useref from './componets/Useref'
import UseContext from './componets/context/UseContext'
import ChildContext from './componets/context/childContext'
import Parent from './componets/ForwardRef\'/Parent'
import Cparent from './componets/coustom/Cparent'
import CUM_parent from './componets/Communication/p-to-child.jsx/CUM_parent'
import PARENT from './componets/Communication/child - parent/PARENT'
import SB_PARENT from './componets/Communication/SIBLINGS/SB_PARENT'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import Home from './componets/navigate/Home'
import About from './componets/navigate/About'
import Contact from './componets/navigate/Contact'
const LazyCom = React.lazy(()=>import("./componets/lazy.loading/LazyParent"));
const App = () => {
  return (
    <div>
{/* <HigherOrder/> */}
{/* <UseEffect /> */}
{/* <Counter/> */}
{/* <Timer  /> */}
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

</BrowserRouter>
    </div>
  )
}

export default App
