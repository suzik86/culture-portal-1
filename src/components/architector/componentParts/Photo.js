import React from 'react';
import Image from 'react-bootstrap/Image';

const Photo = ({ url }) => (
  <Image src={url} rounded />
);

export default Photo;
