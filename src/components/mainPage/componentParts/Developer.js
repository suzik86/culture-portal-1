import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Developer extends Component {
  render() {
    const {
      name,
      github,
      photo,
      contribution,
    } = this.props;
    const githubAccount = `https://github.com/${github}`;

    return (
      <Col>
        <Image className="developer-photo" src={photo} alt={name} width="150" rounded />
        <p className="developer-name">{name}</p>
        <a href={githubAccount} target="blank">
          <p>{github}</p>
        </a>
        <p>{contribution}</p>
      </Col>
    );
  }
}

export default Developer;
