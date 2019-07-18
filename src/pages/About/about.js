import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import About from '../../components/About';
import Image from '../../components/Image'


const AboutPage =  () => (
  <div>
    <Container>
      <NavBar />
      <Row>
        <Col>
        <Image />
        </Col>
        <Col>
        <About />
        </Col>
      </Row>
      <Footer />
    </Container>
  </div>
);

export default AboutPage;
