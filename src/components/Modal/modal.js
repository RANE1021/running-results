import React from 'react';
// import  { observable } from 'mobx'
// import { action } from 'mobx-react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  close() {
    this.setState({ show: false });
  }

  open() {
    this.setState({ show: true });
  }


  render () {
    return (
      <div onClick={e => e.stopPropagation()}>
        <Button variant="secondary" onClick={() => this.open()}>
          ...
      </Button>
        <Modal show={this.state.show} onHide={()=> this.close()}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer/>
        </Modal>
      </div>
    )
  }
}

export default ResultsComponent;
