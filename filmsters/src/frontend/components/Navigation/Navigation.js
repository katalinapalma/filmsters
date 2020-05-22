import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/" style={{fontSize: '40px'}}>Filmster</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/movies">My movies</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
      </Navbar>
    </Fragment>
  )
}

export default Navigation;