import React from 'react';
import Image from 'react-bootstrap/Image';

const Photo = ({ url }) => (
  <Image src={url} width="350" rounded />
);

export default Photo;
