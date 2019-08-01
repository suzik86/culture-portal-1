import React from 'react';

import TimeLine from './TimeLine';

const TimeLineContainer = ({ timeLine }) => {
  const detailed = [];

  for (let i = 0; i < timeLine.detailedBiographyDate.length; i += 1) {
    detailed[i] = {
      detailedBiographyDate: timeLine.detailedBiographyDate[i],
      detailedBiographyText: timeLine.detailedBiographyText[i],
    };
  }

  return (
    <TimeLine detailed={detailed} />
  );
};

export default TimeLineContainer;
