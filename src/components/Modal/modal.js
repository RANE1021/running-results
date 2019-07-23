import React from 'react';
import { inject, observer } from 'mobx-react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ResultsComponent = ({store}) => {
  return (
    <div onClick={e => e.stopPropagation()}>
      <Button variant="secondary" onClick={() => store.detailedResultsStore.open()}>
        details
    </Button>
      <Modal show={store.detailedResultsStore.modalState.show} onHide={() => store.detailedResultsStore.close()}>
        <Modal.Header closeButton>
          <Modal.Title>{store.detailedResultsStore.test1.eventName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Sample text goes here, iteration of store object.
        </Modal.Body>
        <Modal.Footer/>
      </Modal>
    </div>
  )
}

export default inject('store')(observer(ResultsComponent));

// runnerId:
// bib:
// eventCode:
// eventName:
// venue:
// distanceName:
// startDateTime:
// actualTime:
// actualPace:
