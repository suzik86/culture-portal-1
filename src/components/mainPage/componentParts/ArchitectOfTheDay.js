import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

class ArchitectOfTheDay extends Component {
  static cutDescription(biography, maxLength) {
    if (biography.length > maxLength) {
      return `${biography.slice(0, maxLength)} ...`;
    }
    return biography;
  }

  render() {
    const { architect } = this.props;

    return (
      <section>
        <Image src={architect.photo} alt={architect.name} width="250" rounded />
        <h3>{architect.name}</h3>
        <p>
          {ArchitectOfTheDay.cutDescription(architect.descriptionShort, 300)}
        </p>
      </section>
    );
  }
}

export default ArchitectOfTheDay;
