import '../App.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Bachelorproef react</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/sort">
            Genereren & Sorteren
          </Nav.Link>
          <Nav.Link href="/nasa">
            Nasa
          </Nav.Link>
          <Nav.Link href="/interop">
            JavaScript
          </Nav.Link>
          <Nav.Link href="/chart">
            Chart
          </Nav.Link>
          <Nav.Link href="/picofday">
            Picture of the day
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
