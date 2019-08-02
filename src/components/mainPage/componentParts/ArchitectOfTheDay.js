import React from 'react';
import Image from 'react-bootstrap/Image';

const cutDescription = (biography, maxLength) => {
  if (biography.length > maxLength) {
    return `${biography.slice(0, maxLength)} ...`;
  }
  return biography;
};

const ArchitectOfTheDay = ({ architect, site, index, selectPersonHandler }) => (
  <section className="architect-of-the-day">
    <h2>{site.mainPerson}</h2>
    <a href="#architect" onClick={() => selectPersonHandler('person', index)}>
      <h4>{architect.name}</h4>
    </a>
    <a href="#architect" onClick={() => selectPersonHandler('person', index)}>
      <Image className="architect-photo" src={architect.photo} alt={architect.name} width="250" align="left" rounded onClick={() => selectPersonHandler('person', index)} />
    </a>
    <p>
      {cutDescription(architect.descriptionShort, 800)}
    </p>
  </section>
);

export default ArchitectOfTheDay;
