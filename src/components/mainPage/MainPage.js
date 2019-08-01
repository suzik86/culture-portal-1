import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ArchitectOfTheDay from './componentParts/ArchitectOfTheDay';
import AboutThePortal from './componentParts/AboutThePortal';
import OurTeam from './componentParts/OurTeam';


class MainPage extends Component {
  todayIndex() {
    const { listLength } = this.props;
    const dateOfYear = Math.round((Date.now()
    - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000);
    console.log(dateOfYear, listLength, dateOfYear % listLength);
    return dateOfYear > listLength ? dateOfYear % listLength : dateOfYear;
  }

  render() {
    const { data } = this.props;
    const architect = data.author[this.todayIndex()];
    return (
      <main>
        <Container>
          <Row>
            <Col>
              <AboutThePortal data={data} />
            </Col>
            <Col>
              <ArchitectOfTheDay architect={architect} />
            </Col>
          </Row>
          <Row>
            <OurTeam data={data} />
          </Row>
        </Container>
      </main>

    );
  }
}

export default MainPage;
