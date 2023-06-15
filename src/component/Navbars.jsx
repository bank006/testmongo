import React from 'react'

import { Navbar , Container, Nav  } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Navbars() {
  return (
   <div className='App'>
    <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            <Link to='/'>main</Link>
          </Navbar.Brand>         
          <Nav className='justify-content-end'>
            <Nav className='m-2'>
              <Link to='/User_create'>create</Link>
            </Nav>
            <Nav className='m-2'>
              <Link to='/Price_post'>price</Link>
            </Nav> 
            <Nav className='m-2'>
              <Link to='/User_list'>list</Link>
            </Nav>
            <Nav className='m-2'>
              <Link to='/Showcount'>count</Link>
            </Nav>
          </Nav>
        </Container>

    </Navbar>

   </div>
  )
}

export default Navbars