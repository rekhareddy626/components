import {Routes,Route,Router} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo'
import UseCallback from './Hooks/UseCallback'
import Todo from './component/Todo'
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home name="Rekha"/>}/>
        <Route path='/About' element={<About name="Rekha" age={20} dept="CSD"/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Service' element={<Service/>}></Route>
        <Route path='/useState' element={<UseState/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/UseMemo' element={<UseMemo/>}/>
        <Route path='/todo' element={<Todo/>}/>
        {/*Hooks*/}
      
        <Route path='/hook' element={<Hook/>}>
          <Route path='useState' element={<UseState/>}/>
          <Route path='useEffect' element={<UseEffect/>}/>
          <Route path='useEffectApi' element={<UseEffectApi />}/>
          <Route path='useRef' element={<UseRef/>}/>
          <Route path='useReducer' element={<UseReducer/>}/>
          <Route path='useMemo' element={<UseMemo/>}/>
          <Route path='usecallback' element={<UseCallback/>}/>
          

        </Route>
        
        </Routes>
      
    </>
  )
}

export default App