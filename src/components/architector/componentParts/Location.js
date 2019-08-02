import React from 'react';

const Location = ({ location }) => (
  <p>
    <span>{location.place}</span>
    <span>{` ${location.placeInfo}`}</span>
  </p>
);

export default Location;
