import '../App.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand> <Link to="/" className="btn btn-lg btn-outline-dark">Bachelorproef react</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/sort" className="btn btn-outline-secondary">Genereren & Sorteren</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/nasa" className="btn btn-outline-secondary">Nasa</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/interop" className="btn btn-outline-secondary">JavaScript</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/chart" className="btn btn-outline-secondary">Chart</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/picofday" className="btn btn-outline-secondary">Picture of the day</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
