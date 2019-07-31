import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Developer from './Developer';

class OurTeam extends Component {
  constructor(props) {
    super(props);
    const { team } = this.props;
    this.state = {
      team: { team } || 'Наша команда',
    };
  }

  render() {
    const { team } = this.state;
    return (
      <Container>
        <Row>
          <Col>
            <h3>{ team }</h3>
            <Developer />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OurTeam;
