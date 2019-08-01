import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import uniqid from 'uniqid';

import Developer from './Developer';

class OurTeam extends Component {
  render() {
    const { data } = this.props;
    const { developer } = data.translation.crew;
    const { team } = data.translation.crew;
    console.log(developer);
    return (
      <section>
        <h3>{ team }</h3>
        <Row>
          {developer.map(item => (
            <Developer
              key={uniqid()}
              name={item.name}
              photo={item.photo}
              contribution={item.contribution}
            />
          ))}
        </Row>
      </section>
    );
  }
}

export default OurTeam;
