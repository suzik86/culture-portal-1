import React from 'react';

function YearsLifeArchitector(props) {
  const { years, life } = props.date;

  return (
    <p>
      <span>{years}</span>
      <span>{life}</span>
    </p>
  );
}

export default YearsLifeArchitector;
