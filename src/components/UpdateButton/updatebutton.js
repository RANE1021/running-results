import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from 'react-bootstrap';

@inject('store')
@observer
class UpdateButton extends Component {
  render () {
    return(
      <div>
        <Button variant="secondary" onClick={() => this.props.store.resultsStore.runnersApi()}>
          UpdateRunner
        </Button>
      </div>
    )
  }
}

export default UpdateButton;
