import React from 'react';
import Axios from 'axios';

const url = "https://results.nyrr.org/api/runners/races"
const headers = {
  'Content-Type': 'application/json',
  'token': '6112c32703f442f0'
}
const data = {
  "distance": null,
  "pageIndex": 1,
  "pageSize": 51,
  "runnerId": "18093068",
  "searchString": null,
  "sortColumn": "EventDate",
  "sortDescending": true,
  "year": null
}

class RunningData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: []
    };
  }

  getRunningResults = async function() {
    Axios.post(
      url,
      data,
      headers
      ).then(response => {
        return response.data;
        console.log(response.data);
      }).catch(err => {
        console.log("Axios Error", err)
      })
  }
  

  componentDidMount() {

  }

  render() {
    return (
      <ul>
        { this. state.races.map(race => <li>{ race }</li>)}
      </ul>
    )
  }
}

// async function  getRunningData() {
// try {
//   const response = await Axios.post(url, data, headers);
//   console.log(response);
// } catch (error) {
//   console.error(error);
// }
// }

export default RunningData;
