import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import { inject, observer } from 'mobx-react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import UpdateButton from '../../components/UpdateButton'
import UserForm from '../../components/UserForm'

@inject('store')
@observer
class ResultsPage extends Component {
  componentDidMount() {
    this.searchRaces();
  }

  searchRaces() {
    this.props.store.resultsStore.racesApi()
  }

  render () {
    return (
      <div>
        <Container className="container-styles">
          <NavBar />
          <UserForm />
          <UpdateButton />
          <Footer />
        </Container>
      </div>
    )
  }
};

export default ResultsPage;
