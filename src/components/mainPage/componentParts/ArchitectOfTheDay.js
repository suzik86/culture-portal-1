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
    const {
      architect, site, index, selectPersonHandler,
    } = this.props;

    return (
      <section className="architect-of-the-day">
        <h2>{site.mainPerson}</h2>
        <a href="#architect" onClick={() => selectPersonHandler('person', index)}><h4>{architect.name}</h4></a>
        <Image className="architect-photo" src={architect.photo} alt={architect.name} width="250" align="left" rounded />
        <p>
          {ArchitectOfTheDay.cutDescription(architect.descriptionShort, 800)}
        </p>
      </section>
    );
  }
}

export default ArchitectOfTheDay;
