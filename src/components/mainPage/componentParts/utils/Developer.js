import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Developer extends Component {
  render() {
    const { data } = this.props;
    const { developer } = data.crew;
    const dev = developer[0];
    return (
      <Col>
        <Image src="template/images/36624664.jpg" width="150" rounded />
        <p>{dev.name}</p>
        <p>{dev.contribution}</p>
      </Col>
    );
  }
}

export default Developer;
