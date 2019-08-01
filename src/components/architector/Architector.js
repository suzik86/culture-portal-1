import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Photo from './componentParts/Photo';
import Name from './componentParts/Name';
import YearsLife from './componentParts/YearsLife';
import Location from './componentParts/Location';
import Biography from './componentParts/Biography';
import TimeLine from './componentParts/TimeLine';
import Work from './componentParts/Work';
import CarouselCustom from './componentParts/CarouselCustom';
import GoogleMapCustom from './componentParts/GoogleMapCustom';

class Architector extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.coords = {
      lat: -36.122,
      lng: 150.644,
    };
  }

  render() {
    return (
      <Container className="container">
        <Row className="architect-description row">
          <Col className="col-md text-center">
            <Photo url={this.data.photo} />
            <Name name={this.data.name} />
            <YearsLife date={this.data.date} />
            <Location location={this.data.location} />
            <Biography biography={this.data.biography} />
            <TimeLine detailedBiography={this.data.detailedBiography} />
            <Work work={this.data.work} />
            <CarouselCustom gallery={this.data.work.project} />
            <GoogleMapCustom
              coords={this.coords}
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Architector;
