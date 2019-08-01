import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import Developer from './Developer';

class OurTeam extends Component {
  render() {
    const { data } = this.props;
    const { team } = data.crew;

    return (
      <section>
        <h3>{ team }</h3>
        <Row>
          {/* {team.forEach((element, i) => {
            <Developer index={i} data={data} />;
          })
          } */}
          <Developer data={data} />
        </Row>
      </section>
    );
  }
}

export default OurTeam;
