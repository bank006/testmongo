import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter , Route ,Routes  } from 'react-router-dom'


import Navbar from './component/Navbars'

import User_create from './component/user_create'


function App() {
  return (
    <div className='contents'>
     
    <div className='main1'>
    
      <BrowserRouter>
      <Navbar/>
      
      <div className="main">
        <Routes>
          <Route  path='/' element={<main/>}/>
          <Route path='/User_create' element={<User_create/>}/>
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>

  </div>

  )
}

export default App
