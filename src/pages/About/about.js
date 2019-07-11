import React from 'react';
import Container from 'react-bootstrap/Container'

import About from '../../components/About';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const AboutPage =  () => (
  <div>
    <Container>
      <NavBar />
      <About />
      <Footer />
    </Container>
  </div>
);

export default AboutPage;
