import React from 'react';
import Table from 'react-bootstrap/Table';

function WorkArchitector(props) {
  const { work } = props;

  const tableWork = Object.values(work.workInfo).map(function (item, i) {
    return (
      <tr>
        <td>{i + 1}</td>
        <td>{item}</td>
      </tr>
    )
  })

  return (
    <div className='table'>
      <h3>{work.workTitle}</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>{work.workSubtitle}</th>
          </tr>
        </thead>
        <tbody>
          {tableWork}
        </tbody>
      </Table>
    </div>
  )
}

export default WorkArchitector;
