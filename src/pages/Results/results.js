import React from 'react';
import Container from 'react-bootstrap/Container'

import Results from '../../components/Results';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const ResultsPage =  () => (
  <div>
    <Container>
      <NavBar />
      <Results />
      <Footer />
    </Container>
  </div>
);

export default ResultsPage;
