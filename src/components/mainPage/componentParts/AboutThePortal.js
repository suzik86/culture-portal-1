import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AboutThePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'О портале',
      description: 'Белорусскому союзу архитекторов...',
    };
  }

  render() {
    const { title } = this.state;
    const { description } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <h3>{title}</h3>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutThePortal;
