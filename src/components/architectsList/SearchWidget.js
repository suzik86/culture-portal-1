import React from 'react';
import Row from 'react-bootstrap/Row';

const SearchWidget = ({ onChange, placeholder }) => (
  <Row>
    <input className="form-control py-2 border" width="500" id="search" type="text" placeholder={placeholder} onChange={e => onChange(e.target.value)} />
  </Row>
);

export default SearchWidget;
