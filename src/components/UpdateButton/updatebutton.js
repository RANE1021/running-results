import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

@inject('store')
@observer
class UpdateButton extends Component {
  updateInfo() {
    this.searchRunners();
    this.updateRunnerId();
  }

  searchRunners() {
    this.props.store.resultsStore.runnersSearchApi()
  }

  updateRunnerId() {
    this.props.store.resultsStore.updateRunnerId()
  }

  render () {
    return(
      <div>
        <Button variant="secondary" onClick={ () => this.updateInfo() }>
          UpdateRunner
        </Button>
      </div>
    )
  }
}

export default UpdateButton;
