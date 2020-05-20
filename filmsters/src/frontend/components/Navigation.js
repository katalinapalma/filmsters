import React, { Fragment } from 'react'
import {Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'

function Navigation() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" style={{fontSize: '40px'}}>Filmster</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#features">My movies</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
      </Navbar>
    </Fragment>
    
  )
}

export default Navigation;
