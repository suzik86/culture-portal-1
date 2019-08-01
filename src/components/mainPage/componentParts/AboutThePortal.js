import React, { Component } from 'react';

class AboutThePortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'О портале',
      description: 'Белорусскому союзу архитекторов...',
    };
  }

  render() {
    const { title } = this.state;
    const { description } = this.state;

    return (
      <section>
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    );
  }
}

export default AboutThePortal;
