import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withTranslation } from 'react-i18next';

import ArchitectOfTheDay from './componentParts/ArchitectOfTheDay';
import AboutThePortal from './componentParts/AboutThePortal';
import OurTeam from './componentParts/OurTeam';


class MainPage extends Component {
  todayIndex() {
    const { listLength } = this.props;
    const dateOfYear = Math.round((Date.now()
    - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000);
    return dateOfYear > listLength ? dateOfYear % listLength : dateOfYear;
  }

  render() {
    const { t } = this.props;
    const site = t('site', { returnObjects: true });
    const architects = t('architects', { returnObjects: true });
    const architectOfTheDay = architects[this.todayIndex()];
    return (
      <main>
        <Container>
          <Row>
            <Col>
              <AboutThePortal site={site} />
            </Col>
            <Col>
              <ArchitectOfTheDay architect={architectOfTheDay} />
            </Col>
          </Row>
          <Row>
            <OurTeam />
          </Row>
        </Container>
      </main>
    );
  }
}

export default withTranslation()(MainPage);
