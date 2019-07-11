import React from 'react';
import Table from 'react-bootstrap/Table';


const ResultsComponent =  () => (
  <div>
    <Table responsive="md" className="table-styling">
        <thead>
          <tr>
            <th />
            <th>Date</th>
            <th>Distance</th>
            <th>Pace</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>07-15-2018</td>
            <td>5 kilometers</td>
            <td>8:53</td>
            <td>27:34</td>
          </tr>
          <tr>
            <td>2</td>
            <td>06-24-2018</td>
            <td>4 miles</td>
            <td>8:53</td>
            <td>35:31</td>
          </tr>
          <tr>
            <td>3</td>
            <td>04-08-2018</td>
            <td>4 miles</td>
            <td>9:13</td>
            <td>36:49</td>
          </tr>
        </tbody>
      </Table>
  </div>
);

export default ResultsComponent;
