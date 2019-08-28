import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import DatePicker from 'react-datepicker';
import * as DateTime from 'react-datetime';

// import "react-datepicker/dist/react-datepicker.css";

import InputField from '../InputField'

@inject('store')
@observer
class UserForm extends Component {
  constructor(props) {
    super(props)
    this.updateUser = this.updateUser.bind(this);
    this.updateDate = this.updateDate.bind(this);
  }

  updateUser(key, value) {
    this.props.store.resultsStore.updateUser(key, value);
  }

  updateDate(date) {
    this. props.store.resultsStore.updateDate(date);
  }

  render() {
    let birthDate = this.props.store.resultsStore.user.birthDate;

    return (
      <div>
        <h2>Search NYRR Results</h2>
        <form>
          <InputField id="fullName" name="Full Name"  onChange={this.updateUser} />
          <DateTime
            selected={birthDate}
            onChange={this.updateDate}
            timeFormat={false}
            defaultValue="Click to select date"
           />
        </form>
      </div>
    )
  }
};

export default UserForm;
