import React from 'react';
import './Header.css';
import logo from './logo.svg';
import { Navbar, Nav } from 'react-bootstrap';


const Header = ({ isSignedIn, onLoginClick }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">CovidCorps</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="ml-auto" onClick={onLoginClick}>
        { isSignedIn ? (
          <Navbar.Text>
            Signed in as: Brett Arkin
          </Navbar.Text>  
        ) : (
          <Nav.Link href="#signup">Join</Nav.Link>
        )}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
  
export default Header;