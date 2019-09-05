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
    const dayOfYear = Math.ceil((Date.now()
      - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000);
    return dayOfYear > listLength ? dayOfYear % listLength : dayOfYear;
  }

  render() {
    const { t, selectPersonHandler } = this.props;
    const site = t('site', { returnObjects: true });
    const architects = t('architects', { returnObjects: true });
    const index = this.todayIndex();
    const architectOfTheDay = architects[index];
    return (
      <main className="main">
        <Container>
          <Row>
            <Col>
              <AboutThePortal site={site} />
            </Col>
            <Col>
              <ArchitectOfTheDay
                site={site}
                index={index}
                architect={architectOfTheDay}
                selectPersonHandler={selectPersonHandler}
              />
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
