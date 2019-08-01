import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Developer extends Component {
  render() {
    const { name, photo, contribution } = this.props;

    return (
      <Col>
        <Image src={photo} alt={name} width="150" rounded />
        <p>{name}</p>
        <p>{contribution}</p>
      </Col>
    );
  }
}

export default Developer;
