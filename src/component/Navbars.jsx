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
            <Nav>
              <Link to='/User_create'>main</Link>
            </Nav>
          </Nav>
        </Container>

    </Navbar>

   </div>
  )
}

export default Navbars