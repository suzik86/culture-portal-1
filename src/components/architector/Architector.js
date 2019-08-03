import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Photo from './componentParts/Photo';
import Name from './componentParts/Name';
import YearsLife from './componentParts/YearsLife';
import Location from './componentParts/Location';
import Biography from './componentParts/Biography';
import TimeLineCustom from './componentParts/TimeLineCustom';
import Work from './componentParts/Work';
import CarouselCustom from './componentParts/CarouselCustom';
import VideoCustom from './componentParts/VideoCustom';
import GoogleMapCustom from './componentParts/GoogleMapCustom';

class Architector extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { t, targetArch } = this.props;
    const data = t('architects', { returnObjects: true })[targetArch];
    const site = t('site', { returnObjects: true });
    const location = {
      place: data.place,
      placeInfo: data.placeInfo,
    };
    const biography = {
      title: data.biography,
      description: data.descriptionShort,
    };
    const { video, photoGallery } = site;

    return (
      <main className="main">
        <Container className="container">
          <Row className="architect-description row">
            <Col className="col-md text-center">
              <Photo url={data.photo} />
              <Name name={data.name} />
              <YearsLife years={data.years} life={data.life} />
              <Location location={location} />
              <Biography biography={biography} />
              <TimeLineCustom detailedBiography={data.detailedBiography} />
              <Work work={data.work} />
              <CarouselCustom photoGallery={photoGallery} gallery={data.work.project} />
              <VideoCustom idVideo={data.work.idVideo} video={video} />
              <GoogleMapCustom src={data.coordsSrc} place={data.place} />
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}

export default withTranslation()(Architector);
