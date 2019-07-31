import React, { Component } from 'react';

import Developer from './Developer';

class OurTeam extends Component {
  constructor(props) {
    super(props);
    const { team } = this.props;
    this.state = {
      team: { team } || 'Наша команда',
    };
  }

  render() {
    const { team } = this.state;
    return (
      <section>
        <h3>{ team }</h3>
        <Developer />
      </section>
    );
  }
}

export default OurTeam;
