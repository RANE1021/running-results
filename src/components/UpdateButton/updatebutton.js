import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

@inject('store')
@observer
class UpdateButton extends Component {
  searchRunners() {
    this.props.store.resultsStore.runnersSearchApi()
  }

  render () {
    return(
      <div>
        <Button variant="secondary" onClick={ () => this.searchRunners() }>
          UpdateRunner
        </Button>
      </div>
    )
  }
}

export default UpdateButton;
