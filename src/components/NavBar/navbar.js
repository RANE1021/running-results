import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import { NavLink } from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => (
  <Navbar>
    <Navbar.Brand href="/" className="navbar-title">Race Tracker</Navbar.Brand>
    <Nav className="ml-auto">
      <NavLink to="/" className="navbar-link-styling"><FontAwesomeIcon icon={faHome} />Home</NavLink>
      <NavLink to="/about" className="navbar-link-styling">About</NavLink>
      <NavLink to="/results" className="navbar-link-styling">Running Results</NavLink>
    </Nav>
  </Navbar>
) ;

export default NavBar
