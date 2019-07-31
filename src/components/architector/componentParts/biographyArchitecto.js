import React from 'react';

function BiographyArchitector(props) {
  const { title, description } = props.biography;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default BiographyArchitector;
