import {Routes,Route,Router} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import UseState from './Hooks/UseState'
import Login from './Auth/Login'
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect'
import UseEffectApi from './Hooks/UseEffectApi'
import Signup from './Auth/Signup'
import UseRef from './Hooks/UseRef'
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
        {/*Hooks*/}
      
        <Route path='/hook' element={<Hook/>}>
          <Route path='useState' element={<UseState/>}/>
          <Route path='useEffect' element={<UseEffect/>}/>
          <Route path='useEffectApi' element={<UseEffectApi />}/>
          <Route path='useRef' element={<UseRef/>}/>
        </Route>
        
        </Routes>
      
    </>
  )
}

export default App