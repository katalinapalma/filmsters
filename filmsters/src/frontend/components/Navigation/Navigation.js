import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark"  expand="lg" fixed="top">
        <Navbar.Brand href="/" >Filmster</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link  href="#features">My movies</Nav.Link>
            <Nav.Link  href="#features">Reviews</Nav.Link>
          </Nav>
          <Nav.Link href="/login">Login</Nav.Link>
      </Navbar>
    </Fragment>
  )
}

export default Navigation;
