import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Developer extends Component {
  constructor(props) {
    super(props);
    const { photo } = this.props;
    const { name } = this.props;
    const { contribution } = this.props;
    this.state = {
      photo: { photo } || 'template/images/36624664.jpg',
      name: { name } || 'Александр Самусевич',
      contribution: { contribution } || 'Создал json-файл с информацией об архитекторах и команде разработчиков, функцию переключения языков...',
    };
  }

  render() {
    const { photo } = this.state;
    const { name } = this.state;
    const { contribution } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <Image src={photo} rounded />
            <h3>{name}</h3>
            <p>{contribution}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Developer;
