import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => (
  <Navbar>
    <Nav className="ml-auto">
      <a href={'https://www.github.com/RANE1021'} className="footer-styling"><FontAwesomeIcon icon={['fab', 'github']} />Github</a>
      <a href={'https://www.linkedin.com/in/rnunez/'} className="footer-styling"><FontAwesomeIcon icon={['fab', 'linkedin']} />LinkedIn</a>
    </Nav>
  </Navbar>
) ;

export default Footer
