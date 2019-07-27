import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PhotoArchitector from './componentParts/photoArchitector';
import NameArchitector from './componentParts/nameArchitector';
import YearsLifeArchitector from './componentParts/yearsLifeArchitector';
import LocationArchitector from './componentParts/locationArchitector';
// import BiographyArchitector from './componentParts/biographyArchitecto';
// import NameArchitector from './componentParts/nameArchitector';
// import NameArchitector from './componentParts/nameArchitector';
// import NameArchitector from './componentParts/nameArchitector';
// import NameArchitector from './componentParts/nameArchitector';

class Architector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo || `https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg`,
      name: this.props.name || `Иванов Иван Иванович`,
      date: {
        years: `Годы жизни: `,
        life: this.props.life || `14 января 1918 - 23 сентября 1997`
      },
      location: {
        place: `Место рождения: `,
        placeInfo: this.props.place || `г.Алатырь, Симбирская губерния (ныне Чувашия)`
      },
      biography: {
        title: `Биография`,
        description: this.props.description || `советский архитектор и педагог, работавший в конце 1940-х — начале 1950-х годов в Литве; заслуженный архитектор Беларуси (1980), член-корреспондент Белорусской академии архитектуры.`
      }

    };
  }

  render() {

    return (
      <Container className='container'>
        <Row className='architect-description row'>
          <Col className='col-md text-center'>
            <PhotoArchitector url={this.state.photo} />
            <NameArchitector name={this.state.name} />
            <YearsLifeArchitector date={this.state.date} />
            <LocationArchitector location={this.state.location} />
            {/* <BiographyArchitector biography={this.state.biography} /> */}
          </Col>
        </Row>
      </Container>

    )
  }
}

export default Architector;
