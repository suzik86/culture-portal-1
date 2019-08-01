import React from 'react';
import Table from 'react-bootstrap/Table';
import uniqid from 'uniqid';

const Work = ({ work }) => {
  const tableWork = Object.values(work.workInfo).map((item, i) => (
  // TODO сменить объект на массив
  // const tableWork = work.workInfo.map(item => (
    <tr key={uniqid()}>
      <td>{i + 1}</td>
      <td>{item}</td>
    </tr>
  ));

  return (
    <div className="table">
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
  );
};

export default Work;
