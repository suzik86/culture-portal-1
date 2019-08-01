import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Developer extends Component {
  constructor(props) {
    super(props);
    const { photo, name, contribution } = props;
    this.state = {
      photo: photo || 'src/assets/images/36624664.jpg',
      name: name || 'Александр Самусевич',
      contribution: contribution || 'Создал json-файл с информацией об архитекторах и команде разработчиков, функцию переключения языков...',
    };
  }

  render() {
    const { photo, name, contribution } = this.state;
    return (
      <Col>
        <Image src={photo} rounded />
        <h3>{name}</h3>
        <p>{contribution}</p>
      </Col>
    );
  }
}

export default Developer;
