import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class ArchitectOfTheDay extends Component {
  static cutDescription(biography, maxLength) {
    if (biography.length > maxLength) {
      return `${biography.slice(0, maxLength)} ...`;
    }
    return biography;
  }

  render() {
    const { architect } = this.props;

    return (
      <section>
        <Container>
          <Row>
            <Col>
              <Image src={architect.photo} alt={architect.name} width="250" rounded />
              <h3>{architect.name}</h3>
              <p>
                {ArchitectOfTheDay.cutDescription(architect.descriptionShort, 300)}
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default ArchitectOfTheDay;
