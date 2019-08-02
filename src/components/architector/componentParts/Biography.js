import React from 'react';

const Biography = ({ biography }) => (
  <div>
    <h3>{biography.title}</h3>
    <p>{biography.description}</p>
  </div>
);

export default Biography;
