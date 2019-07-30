import React from 'react';

function LocationArchitector(props) {
  const { place, placeInfo } = props.location;

  return (
    <p>
      <span>{place}</span>
      <span>{placeInfo}</span>
    </p>
  )
}

export default LocationArchitector;
