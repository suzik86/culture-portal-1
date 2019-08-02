import React, { Component } from 'react';
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
  constructor(props) {
    super(props);
    this.data = props.data;
    this.idVideo = props.site.idVideo;
    this.coords = {
      lat: -36.122,
      lng: 150.644,
    };
  }

  render() {
    const location = {
      place: this.data.place,
      placeInfo: this.data.placeInfo,
    };
    const biography = {
      title: this.data.biography,
      description: this.data.descriptionShort,
    };

    return (
      <main className="main">
        <Container className="container">
          <Row className="architect-description row">
            <Col className="col-md text-center">
              <Photo url={this.data.photo} />
              <Name name={this.data.name} />
              <YearsLife life={this.data.life} />
              <Location location={location} />
              <Biography biography={biography} />
              <TimeLineCustom detailedBiography={this.data.detailedBiography} />
              <Work work={this.data.work} />
              <CarouselCustom gallery={this.data.work.project} />
              <VideoCustom idVideo={this.idVideo} />
              <GoogleMapCustom src={this.data.coordsSrc} place={this.data.place} />
            </Col>
          </Row>
        </Container>
      </main>

    );
  }
}

export default Architector;
