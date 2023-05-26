import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.css'


import { BrowserRouter , Route ,Routes  } from 'react-router-dom'


import Navbar from './component/Navbars'

import User_create from './component/user_create'
import User_edite from './component/User_edite'
import User_list from './component/user_list'



function App() {
  return (
    <div className='contents'>
     
    <div className='main1'>
    
      <BrowserRouter>
      <Navbar/>
      
      <div className="main">
        <Routes>
          <Route  path='/' element={<User_create/>}/>
          <Route path='/User_create' element={<User_create/>}/>
          <Route path='/User_edit/:id' element={<User_edite/>}/>
          <Route path='/User_list' element={<User_list/>}/>
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>

  </div>

  )
}

export default App
