import React from 'react';
import { observer, inject } from 'mobx-react';
import Table from 'react-bootstrap/Table';

import Modal from '../Modal'

const ResultsComponent = ({store}) => {
        return (
          <div>
            <Table responsive="md" className="table-styling">
              <thead>
                <tr>
                  <th />
                  <th>Date</th>
                  <th>Distance</th>
                  <th>Pace</th>
                  <th>Time</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <th>{store.resultsStore.test1.date}</th>
                  <th>{store.resultsStore.test1.distance}</th>
                  <th>{store.resultsStore.test1.pace}</th>
                  <th>{store.resultsStore.test1.time}</th>
                  <td><Modal /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <th>{store.resultsStore.test2.date}</th>
                  <th>{store.resultsStore.test2.distance}</th>
                  <th>{store.resultsStore.test2.pace}</th>
                  <th>{store.resultsStore.test2.time}</th>
                  <td>
                    <Modal />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <th>{store.resultsStore.test3.date}</th>
                  <th>{store.resultsStore.test3.distance}</th>
                  <th>{store.resultsStore.test3.pace}</th>
                  <th>{store.resultsStore.test3.time}</th>
                  <td>
                    <Modal />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        )
      }

export default inject('store')(observer(ResultsComponent));
