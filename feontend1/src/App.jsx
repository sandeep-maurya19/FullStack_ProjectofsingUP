import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { Navigate, Route , Routes } from 'react-router-dom'  
import SingUP from './SingUP'
import Login from './Login'
import Usernot from './Usernot'
import Home from './Home'
import About from './About'
import CheckW from './CheckW'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
         {/* <Navbar /> */}
         <Routes>
          <Route path='*' element={<Navigate to="/SingUP"  replace />}  />
              <Route  path='/' element={<Home/>} />
              <Route  path='/about' element={<About/>} />
              <Route  path='/SingUP' element={<SingUP/>} />
              <Route  path='/login1' element={<Login/>} />
               <Route  path='/error' element={<Usernot/>} />
                <Route  path='/chekout1' element={<CheckW/>} />

               




         </Routes>

    </>
  )
}

export default App
