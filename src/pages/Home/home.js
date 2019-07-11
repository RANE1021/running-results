import React from 'react';
import Container from 'react-bootstrap/Container'

import Home from '../../components/Home';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const HomePage =  () => (
  <div>
   <Container>
      <NavBar />
      <Home />
      <Footer />
   </Container>
  </div>
);

export default HomePage;
