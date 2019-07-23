import React from 'react';
import Axios from 'axios';

const url = "https://results.nyrr.org/api/runners/races"
const headers = {
  token: '6112c32703f442f0'
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

  // getRunningResults = async() => {
  //   Axios.post(
  //     url,
  //     data,
  //     headers
  //     ).then(response => {
  //       return response.data;
  //       console.log(response.data);
  //     }).catch(err => {
  //       console.log("Axios Error", err)
  //     })
  // }


 export async function getRunningResults => {
try {
  let response = await Axios.post(url, data, headers);
  let { data } = response.data;
  console.log(data);
} catch (error) {
  console.error(error);
}
}
