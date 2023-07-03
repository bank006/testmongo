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
import Price_post from './component/Price_post'
import Showcouut from './component/Showcouut'
import Showsum from './component/Showsum'

import Detail_user from './component/Detail_user'
import UploadPR from './component/UploadPR'



function App() {
  return (
    <div className='contents'>
     
    <div className='main1'>
    
      <BrowserRouter>
      <Navbar/>
      
      <div className="main">
        <Routes>
          <Route path='/detail/:id' element={<Detail_user/>}/>
          <Route  path='/' element={<User_create/>}/>
          <Route path='/User_create' element={<User_create/>}/>
          <Route path='/fechdetail/:id' element={<User_edite/>}/>
          <Route path='/User_list' element={<User_list/>}/>
          <Route path='/Price_post' element={<Price_post/>}/>
          <Route path='/Showcount' element={<Showcouut/>}/>
          <Route path='/Showsum' element={<Showsum/>}/>
          <Route path='/Upload/:id_users' element={<UploadPR/>}/>
          
          
          
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>

  </div>

  )
}

export default App
