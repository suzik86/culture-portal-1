import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import PhotoArchitector from './componentParts/photoArchitector';

class Architector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: `https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg`,
      name: 'this.props.name',
      date: 'this.props.date',
      location: 'this.props.location',
      description: 'this.props.description'
    };
  }




  render() {

    return (
      <Container className='container'>
        <Row className='architect-description row'>
          <Col className='col-md text-center'>

            <PhotoArchitector url={this.state.photo} />
            <h2>{this.state.name}</h2>
            <h2>{this.state.date}</h2>
            <h2>{this.state.location}</h2>
            <h2>{this.state.description}</h2>
            <h2>ololo</h2>

          </Col>
        </Row>
      </Container>

    )
  }
}

export default Architector;
