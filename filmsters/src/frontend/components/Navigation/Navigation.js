import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{fontSize: '40px', marginLeft: '60px'}}>Filmster</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link style={{fontSize: '30px', marginLeft: '40em'}} href="#features">My movies</Nav.Link>
            <Nav.Link style={{fontSize: '30px', marginLeft: '60px', color: 'red !important'}} href="/login">Login</Nav.Link>
          </Nav>
      </Navbar>
    </Fragment>
  )
}

export default Navigation;
