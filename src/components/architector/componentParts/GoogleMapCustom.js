import React from 'react';
import Iframe from 'react-iframe';

const GoogleMapCustom = ({ src, place }) => (
  <Iframe
    className="map"
    src={src}
    width="100%"
    height="600"
    frameborder="0"
    allowfullscreen
  >
    {place}
  </Iframe>
);

export default GoogleMapCustom;
