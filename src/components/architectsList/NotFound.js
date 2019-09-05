import React from 'react';
import Row from 'react-bootstrap/Row';

const NotFound = ({ notFound }) => (
  <Row>
    <span className="not-found-text">{notFound}</span>
  </Row>
);

export default NotFound;
