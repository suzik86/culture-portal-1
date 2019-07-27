import React from 'react';
import Image from 'react-bootstrap/Image';

function PhotoArchitector(props) {
  const {url} = props;
  return (
    <Image src={url} rounded />
  )
}

export default PhotoArchitector;