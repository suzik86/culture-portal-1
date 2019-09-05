import React from 'react';
import Table from 'react-bootstrap/Table';
import uniqid from 'uniqid';

const Work = ({ work }) => {
  const tableWork = work.workInfo.map((item, i) => (
    <tr key={uniqid()}>
      <td>{i + 1}</td>
      <td>{item}</td>
    </tr>
  ));

  return (
    <div className="table">
      <h4>{work.workTitle}</h4>
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
  );
};

export default Work;
