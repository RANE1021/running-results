import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Modal } from 'react-bootstrap';

@inject('store')
@observer
class ResultsComponent extends Component {
  open = () => {
    this.props.store.detailedResultsStore.open();
  }

  close = () => {
    this.props.store.detailedResultsStore.close();
  }

 render() {
    return (
      <div>
        <Button variant="secondary" onClick={() => this.open()}>
          details
        </Button>
        <Modal
          show={this.props.store.detailedResultsStore.modalState.show}
          onHide={() => this.close()}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {this.props.store.detailedResultsStore.test1.eventName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sample text goes here, iteration of store object.
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
 }
}

export default ResultsComponent;

// runnerId:
// bib:
// eventCode:
// eventName:
// venue:
// distanceName:
// startDateTime:
// actualTime:
// actualPace:
