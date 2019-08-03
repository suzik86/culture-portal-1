import React from 'react';

const Biography = ({ biography }) => (
  <div>
    <h4>{biography.title}</h4>
    <p>{biography.description}</p>
  </div>
);

export default Biography;
