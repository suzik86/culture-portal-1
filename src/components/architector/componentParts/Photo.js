import React from 'react';
import Image from 'react-bootstrap/Image';

const Photo = ({ url }) => (
  <Image className="photo-architector" src={url} width="350" rounded />
);

export default Photo;
